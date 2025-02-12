---
title: Rust Setup
lang: rust
---
```rust
use shuriken_analyzer::Analyzer;

fn main() {
    let analyzer = Analyzer::new();
    let result = analyzer.analyze("app.apk").unwrap();
    println!("{}", result.summary());
}
```