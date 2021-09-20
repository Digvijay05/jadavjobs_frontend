import React, { Component } from 'react'
import TableCard from "./TableCard"

export class JOBTable extends Component {
    intervalID;
    constructor(props) {
        super(props);
        this.name = props.tableName;
        this.linklist = [];
        this.state = { links: [] };
    }
    createTable() {
        console.log("createTable Started")
        this.linklist = this.state.links.map((item, i) => (
            <TableCard name={item.name} link={item.link} />
        ))
    }
    componentDidMount() {
        this.getData();
        this.intervalID = setInterval(this.getData.bind(this), 20000);
    }
    getData() {
        fetch('http://localhost:8000/api/link-list')
            .then(results => results.json())
            .then(data => {
                console.log(data);
                this.setState({ links: [] })
                for (var i = 0; i < data.posts.length; i++) {
                    this.state.links.push({
                        name: data.posts[i].name,
                        link: data.posts[i].link
                    });
                }
                this.setState({ links: [...this.state.links] })
                console.log("API DONE", this.state.links);
            }, []);
    }
    componentWillUnmount() {
        //   stop getData() from continuing to run even
        //   after unmounting this component
        clearInterval(this.intervalID);
    }
    render() {
        this.createTable();
        return (
            <div className="flex flex-col mx-auto">

                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 px-8 py-2">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 min-col-3">
                                <thead className="bg-gray-25">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-centre text-sm font-medium text-blue-600 uppercase tracking-wider">
                                            {console.log(this.name)}
                                            {this.name}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {console.log(this.linklist)}
                                    {this.linklist}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JOBTable
