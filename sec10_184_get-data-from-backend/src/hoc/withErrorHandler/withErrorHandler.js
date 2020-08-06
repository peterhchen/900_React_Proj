import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../_Aux/_Aux'
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        // anonymous class 
        state = {
            error: null
        }

        componentWillMount () {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        // componentDidMount () {
        //     axios.interceptors.request.use (req => {
        //         this.setState({error: null})
        //         return req
        //     })
        //     axios.interceptors.response.use(res => res, error => {
        //         this.setState({error: error})
        //     });
        // }
        render () {
            return (
                <Aux>
                    <Modal show = { this.state.error }>
                        clicked = { this.errorConfirmedHandler }
                        { this.state.error ? this.state.error.message : null }
                        {/* Something did not work! */}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}

// const withErrorHandler = (WrappedComponent) => {
//     return (props) => {
//         return (
//             <Aux>
//                 <Modal show>
//                     Something did not work!
//                 </Modal>
//                 <WrappedComponent {...props} />
//             </Aux>
//         );
//     }
// }
 
export default withErrorHandler;