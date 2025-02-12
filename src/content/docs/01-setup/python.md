---
title: Python Setup
lang: python
---
```python
pip install shuriken-analyzer

from shuriken import Analyzer

analyzer = Analyzer()
result = analyzer.analyze("app.apk")
print(result.summary())
```