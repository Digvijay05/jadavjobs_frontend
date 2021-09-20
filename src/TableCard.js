import React, { Component } from 'react'

export default class TableCard extends Component {
    constructor(props) {
        super(props);
        this.props = props
    }
    render() {
        return (
            <tr>
                <td className="px-6 py-4 whitespace-nowrap h-0.25">
                    <div className="flex items-center">
                        <a type="url" target="_blank" href={"http://localhost:3000" + this.props.link} className="text-sm bg-dodger-blue font-medium text-sky-800 hover:text-blue-800" onClick={() => {
                            console.log(this.props)
                        }}>{this.props.name}
                        </a>
                    </div>
                </td >
            </tr >
        );
    }
}
