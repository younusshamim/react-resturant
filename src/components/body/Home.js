import react, { Component } from 'react';
// import { connect } from 'react-redux';

// const mapStateToProps = state => {
//     // console.log("mapStateToProps", state);
//     return {
//         dishes: state.dishes,
//         sample: state.sample
//     }
// }

class Home extends Component {
    // componentDidMount() {
    //     console.log("home state:", this.state);
    //     console.log("home props:", this.props);
    //     this.props.dispatch({
    //         type: 'TEST',
    //         str: "Bohubrihi"
    //     })
    // }
    // componentDidUpdate() {
    //     console.log("home props updated:", this.props);
    // }

    render() {
        document.title = "Resturant";
        return (
            <div>

            </div>
        )
    }
}

// export default connect(mapStateToProps)(Home);
export default Home;