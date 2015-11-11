# react-resize
React component that wraps the child component in (a div with width / height matching that of the current / updated window size).
# Example
```
npm install --save react-resize
```
```javascript
import React from 'react'
import Resize from 'react-resize'

class App extends React.Component {
    render() {
        return (
            <Resize>
                <div className="app">
                    Hola React Resize
                </div>
            </Resize>
        )
    }
}

React.render(<App/>, document.getElemenById('myApp'))
```

## Autor
Carlos Cuatin <cecg1996@gmail.com>
