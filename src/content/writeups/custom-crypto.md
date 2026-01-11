---
title: "Reverse Engineering Custom Crypto"
date: "2024-04-12"
excerpt: "Analyzing a custom encryption implementation in a malware sample and writing a decryptor."
tags: ["Reverse Engineering", "Malware Analysis", "Cryptography"]
coverImage: "/images/blog/rev-eng.jpg"
---

# Analysis

During a recent engagement, we encountered a binary that was encrypting C2 traffic using a custom routine.

## The Routine

Reviewing the assembly, we noticed a simple XOR loop but with a rotating key.

```c
void encrypt(char *data, int len, char *key, int key_len) {
    for(int i = 0; i < len; i++) {
        data[i] ^= key[i % key_len];
        key[i % key_len] = (key[i % key_len] + 1) & 0xFF; // Key mutation
    }
}
```

## Weakness

The key mutation was predictable. By effectively knowing the plaintext (standard HTTP headers), we could derive the initial key state.

## Decryptor

We wrote a Python script to recover the key:

```python
def solve_key(ciphertext, known_plaintext):
    key = []
    for c, p in zip(ciphertext, known_plaintext):
        k = c ^ p
        key.append(k)
    return key
```

Always use standard crypto libraries (AES, ChaCha20) instead of rolling your own.
