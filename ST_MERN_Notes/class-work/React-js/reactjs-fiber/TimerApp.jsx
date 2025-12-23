class TimerApp extends Component{
    constructor(){
        super();
        this.state = {
            seconds:0,
            intervalId: null,
            username:"Tanishq Srinivasan",
            isLoading:true,
            error:"",
            data:[],
            isDataEmpty: false
        }
    }
    componentDidMount(){
        console.log("Component MountedSuccessfully!")

        this.intervalId = setInterval(function(){
            this.setState({seconds:this.state.seconds + 1})
        }.bind(this),1000)
    }
    componentDidUpdate(preventProps,prevState){
        if(prevState.isLoading !== this.state.isLoading){

        }
        if(prevState.isDataEmpty !== this.state.isDataEmpty){

        }
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render(){
        return(
            <>
                <h1>Timer Start:{this.state.second}</h1>
                {this.state.isLoading && <p>Loading...</p>}

                {this.state.isDataEmpty && <p>Data is Empty</p>}
            </>
        )
    }
}

export default TimerApp;