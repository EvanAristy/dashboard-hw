

class Box1 extends React.Component {
    render() {
        return(
            <div id='top-box1'>
                <p>Reviews</p>
                <h1>1,281</h1>
            </div>
        )
    }
}

class Box2 extends React.Component {
    render() {
        return(
            <div id='top-box2'>
                <p>Average Rating</p>
                <h1>4.6</h1>
            </div>
        )
    }
}

class Box3 extends React.Component {
    render() {
        return(
            <div id='top-box3'>
                <p>Sentiment Analysis</p>
                <h1>960</h1>
                <h1>122</h1>
                <h1>321</h1>
            </div>
        )
    }
}

class BigBox extends React.Component {
    render() {
        return(
            <div id="big-bottom">
                <p>Website Visitors</p>
                <h1>821</h1>
                <div id="inner">
                    
                </div>
            </div>
        )
    }
}

class Sidebar extends React.Component {
    render() {
        return(
            <div id="side">
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Customers</p>
                <p>Online Analysis</p>
                <p>Settings</p>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return(
            <div id='main'>
                <Sidebar />
                <Box1 />
                <Box2 />
                <Box3 />
                <BigBox />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#container"));
