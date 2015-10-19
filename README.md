# ui-components
C2FO core ui components


## Developer

This project uses git submodules and requires extra parameters for cloning to begin work.

```bash
git clone --recursive git@github.com:C2FO/ui-components.git
```

or

```bash
git clone git@github.com:C2FO/ui-components.git
cd ui-components
git submodule update --init --recursive
```

### Generating Documentation
yuidoc - http://yui.github.io/yuidoc/

```bash
# Confirm your changes with the yuidoc server
yuidoc . --server 

# Build main repo documentation
yuidoc .

# Build public documentation with github pages (c2fo.github.io/ui-components/docs)
yuidoc . -o gh-pages/docs/

