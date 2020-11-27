import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
    const randomColors = colors[Math.floor(Math.random() * 6)];
    const className = randomColors + '-text';
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default Rainbow
