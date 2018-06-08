import React from 'react'
import { Button } from 'antd';
class Hello extends React.Component{
    click(){
        console.log(123)
    }
    render() {
        return (
            <div>
                <Button onClick={this.click} type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        );
    }
}
export default Hello;

