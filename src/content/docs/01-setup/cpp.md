---
title: C++ Setup
lang: cpp
---
```cpp
#include <shuriken/analyzer.hpp>

int main() {
    shuriken::Analyzer analyzer;
    auto result = analyzer.analyze("app.apk");
    std::cout << result.summary() << std::endl;
    return 0;
}
```