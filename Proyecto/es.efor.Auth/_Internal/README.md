All classes, enums, interfaces... inside this folder must 
have their accessor as internal and only be accesible 
from within the library:

```csharp
internal class MyLibraryLevelHelper {
    internal string SomeProperty { get; set; }
}
```
