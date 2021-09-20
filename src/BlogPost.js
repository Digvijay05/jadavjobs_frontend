import "./App.css";
import React, { Component } from 'react'

export default class BlogPost extends Component {
    intervalID;
    constructor(props) {
        super(props);
        this.state = { application_fee: [], important_dates: [], age_limit_list: [], qualification_list: [], vacancy_columns: [], vacancy_details_list: [] };
    }
    componentDidMount() {
        this.getData();
        this.intervalID = setInterval(this.getData.bind(this), 10000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    getData() {
        fetch('http://localhost:8000/api/random-post')
            .then(results => results.json()).then(data => {
                this.setState({ ...new Object(data) })
                console.log(this.state);
            });
    }
    qualification() {
        console.log("Happende")
        if (this.qual_list != []) {
            console.log("Happende")
            return (
                <section className="divide-y divide-yellow-500" >
                    <h1 className="font-bold font-sans text-2xl text-center">
                        Qualification
                    </h1>
                    <ul>
                        {this.qual_list}
                    </ul>
                </section >
            );
        } else {
            console.log("CONSOAN")
            return "";
        }

    }
    render() {
        this.fee_list = this.state.application_fee.map((item, i) => (
            <li>{item.name}</li>
        ))
        this.date_list = this.state.important_dates.map((item, i) => (
            <li>{item.name}:{item.date}</li>
        ))
        this.age_list = this.state.age_limit_list.map((item, i) => (
            <li>{item.name}{!item.age ? "" : `:${item.age}`}</li>
        ))
        this.qual_list = this.state.qualification_list.map((item, i) => (
            <li>{item.name}</li>
        ))
        this.column_list = this.state.vacancy_columns.map((item, i) => (
            <th className="px-4 py-3">{item.name}</th>
        ))
        this.vacancy_list = []
        for (var i = 1; i <= this.state.vacancy_rows; i++) {
            // this.state.vacancy_details_list.
            this.vacancy_list.append(() => (
                <td><tr></tr></td>
            ))
        }

        console.log(this.vacancy_list);
        return (<div class="container w-full md:max-w-3xl mx-auto pt-20" >

            <div class="w-full px-4 md:px-6 text-xl text-gray-800 divide-y divide-yellow-500 leading-normal" style={{ "font-family": "Georgia,serif" }}>

                {/* <!--Title--> */}
                <div class="font-sans">
                    <p class="text-base md:text-sm text-green-500 font-bold">&lt; <a href="#" class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">BACK TO BLOG</a></p>
                    <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{this.state.post_heading}</h1>
                    <p class="text-sm md:text-base font-normal text-gray-600">{this.state.post_date}</p>
                </div>
                {/* <!--Post Content--> */}

                <section>
                    {/* <!--Lead Para--> */}
                    <blockquote class="border-l-4 border-green-500 my-8 pl-8 md:pl-12"><h3>
                        <strong>Name of the Post:</strong> <span>{this.state.name_of_the_post}</span><br /></h3>
                    </blockquote>
                    <blockquote class="border-l-4 border-blue-500 my-8 pl-8 md:pl-12"><h3>
                        <strong>Post date:</strong> <span>{this.state.post_date}</span><br /></h3>
                    </blockquote>
                    <blockquote class="border-l-4 border-blue-500 my-8 pl-8 md:pl-12"><h3>
                        <strong>Latest Update:</strong> <span>{this.state.latest_update}</span><br /></h3>
                    </blockquote>
                    <blockquote class="border-l-4 border-pink-500 my-8 pl-8 md:pl-12"><h3>
                        <strong>Total Vacancy:</strong> <span>{this.state.vacancy}</span><br /></h3>
                    </blockquote>
                    <blockquote class="border-l-4 border-yellow-500 my-8 pl-8 md:pl-12"><h3>
                        <strong>Brief Information:</strong> <span>{this.state.brief_info}</span><br /></h3>
                    </blockquote>

                </section>
                <section className="divide-y divide-yellow-500">
                    <h1 className="font-bold font-sans text-2xl text-center">Important Dates</h1>
                    <ul>
                        {this.date_list}
                    </ul>
                </section>
                <section className="divide-y divide-yellow-500">
                    <h1 className="font-bold font-sans text-2xl text-center">Application Fee</h1>
                    <ul>
                        {this.fee_list}
                    </ul>
                </section>
                <section className="divide-y divide-yellow-500">
                    <h1 className="font-bold font-sans text-2xl text-center">Age Limit</h1>
                    <ul>
                        {this.age_list}
                    </ul>
                </section>
                <section id="qualification" className="divide-y divide-yellow-500" >
                    <h1 className="font-bold font-sans text-2xl text-center">
                        Qualification
                    </h1>
                    <ul>
                        {this.qual_list != [] ? `${this.qual_list}` : `${this.qual_id.remove()}`}
                    </ul>
                </section >
                <section class="container mx-auto p-6 font-mono divide-y divide-yellow-500">
                    <h1 className="font-bold font-sans text-2xl text-center">
                        Vacancy Details
                    </h1>
                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div class="w-full overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                        {this.column_list}
                                    </tr>
                                </thead>
                                <tbody class="bg-white">
                                    {this.vacancy_list}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                {/* <!--/ Post Content--> */}

            </div>

            {/* <!--Tags --> */}
            <div class="text-base md:text-sm text-gray-500 px-4 py-6">
                Tags: <a href="#" class="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a> . <a href="#" class="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a>
            </div>

            {/* <!--Divider--> */}
            <hr class="border-b-2 border-gray-400 mb-8 mx-4" />


            {/* <!--Subscribe--> */}
            <div class="container px-4">
                <div class="font-sans bg-gradient-to-b from-green-100 to-gray-100 rounded-lg shadow-xl p-4 text-center">
                    <h2 class="font-bold break-normal text-xl md:text-3xl">Subscribe to my Newsletter</h2>
                    <h3 class="font-bold break-normal text-gray-600 text-sm md:text-base">Get the latest posts delivered right to your inbox</h3>
                    <div class="w-full text-center pt-4">
                        <form method="POST" action="">
                            <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                                <input type="email" placeholder="youremail@example.com" class="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none" />
                                <button type="submit" class="flex-1 mt-4 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- /Subscribe--> */}



            {/* <!--Author--> */}
            <div class="flex w-full items-center font-sans px-4 py-12">
                <img class="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                <div class="flex-1 px-2">
                    <p class="text-base font-bold text-base md:text-xl leading-none mb-2">Jo Bloggerson</p>
                    <p class="text-gray-600 text-xs md:text-base">Minimal Blog Tailwind CSS template by <a class="text-green-500 no-underline hover:underline" href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a></p>
                </div>
                <div class="justify-end">
                    <button class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read More</button>
                </div>
            </div>
            {/* <!--/Author--> */}

            {/* <!--Divider--> */}
            <hr class="border-b-2 border-gray-400 mb-8 mx-4" />

            {/* <!--Next & Prev Links--> */}
            <div class="font-sans flex justify-between content-center px-4 pb-12">
                <div class="text-left">
                    <span class="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span><br />
                    <p><a href="#" class="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Blog title</a></p>
                </div>
                <div class="text-right">
                    <span class="text-xs md:text-sm font-normal text-gray-600">Next Post &gt; </span><br />
                    <p><a href="#" class="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Blog title</a></p>
                </div>
            </div>


            {/* <!--/Next & Prev Links--> */}

            {/* <!--/container--> */}</div >

        );
    }
}
