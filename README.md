# Camel to Kebab Case Extension

This extension for Visual Studio Code converts filenames to kebab-case from any other case.

## Features

- Convert filenames to kebab-case.
- Supports JavaScript, TypeScript, JSX, and TSX file types.
- Handle popular files prefixes like `.test`, `.unit`.

Full prefixes list:

```
container => .container
query => .query
mutation => .mutation
unit => .unit
test => .test
story => .story
types => .types
```

So input file name `MyFileContainer.tsx` would be changed to `my-file.container.tsx`

## Installation

1. Launch Visual Studio Code.
2. Go to the Extensions view by clicking on the square icon in the sidebar or pressing `Ctrl+Shift+X`.
3. Search for "filename-case" and click Install.
4. Reload Visual Studio Code to complete the installation.

## Usage

### Convert Filename

1. Right-click on a file in the file explorer.
2. Select "Change case to kebab" from the context menu.
3. The filename will be converted from to kebab-case.

### Shortcut

You can also use the `Ctrl+Shift+P` (Cmd+Shift+P on macOS) shortcut to open the command palette and type "Change Case" to convert the selected text from camelCase to kebab-case.

## Release Notes

### 0.0.1

Initial release of Camel to Kebab Case Extension.

### 0.0.2

Fix readme.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This extension is licensed under the MIT License.
