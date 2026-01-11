---
title: "Bypassing WAFs with Unicode Normalization"
date: "2024-03-20"
excerpt: "A deep dive into how Unicode normalization can be used to bypass Web Application Firewalls and filter lists."
tags: ["Web Security", "WAF Bypass", "Research"]
coverImage: "/images/blog/waf-bypass.jpg"
---

# Introduction

Web Application Firewalls (WAFs) often rely on blacklists to block malicious payloads. However, when applications or intermediate systems normalize Unicode characters, it can create discrepancies between what the WAF sees and what the application processes.

## The Mechanism

Unicode normalization is the process of converting equivalent Unicode strings into a standardized format. For example, the character `e` with an acute accent can be represented as a single code point `\u00E9` or as `e` followed by the combining acute accent `\u0301`.

```python
import unicodedata

s1 = 'é'
s2 = 'e\u0301'

print(s1 == s2) # False
print(unicodedata.normalize('NFC', s1) == unicodedata.normalize('NFC', s2)) # True
```

## Security Implications

If a WAF filters `<script>` tags but the application normalizes `＜script＞` (fullwidth characters) to `<script>`, an attacker can bypass the filter.

### Example Attack Vector

1.  **Attacker sends:** `%EF%BC%9Cscript%EF%BC%9Ealert(1)%EF%BC%9C/script%EF%BC%9E`
2.  **WAF decodes:** `＜script＞alert(1)＜/script＞` -> Doesn't match blocklist.
3.  **Application receives:** Same fullwidth string.
4.  **normalization:** Converts to `<script>alert(1)</script>`.
5.  **Execution:** XSS triggers.

## Conclusion

Always perform normalization _before_ validation. Ensure your security controls understand the full range of Unicode equivalence.
