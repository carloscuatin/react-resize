# react-resize
React component that resize browser of a child component.
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