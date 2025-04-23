---
title: Python APK
lang: python
---
```python
import os
import sys
from shuriken import *

def main():
    # Parse APK file
    file_path = "<Path-To-APK-File>"
    parsed_apk = Apk(file_path)
    
    # Get the number of classes in the DEX file
    dex_file = "classes.dex"
    num_methods = parsed_apk.get_number_of_classes_for_dex_file(dex_file) 
    print(f"APK Analysis for {file_path}")
    print(f"Total methods in {dex_file}: {num_methods}")
    print("\nMethod Analysis:")
    print(f"{'Method Name':<40} {'External'}")
    print("-" * 50)
    
    # Iterate through all methods and print their information
    for i in range(num_methods):
        method = parsed_apk.get_analyzed_method_by_idx(i)
        print(f"{method.name.decode('utf-8'):<40} {method.external}")
        
    return 0

if __name__ == "__main__":
    sys.exit(main())
