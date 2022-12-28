import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';
import {
    TableRow,
    TableCell,
    Table,
    TableHead,
    TableBody,
    Paper,
    withStyles,
    CircularProgress,
} from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: '1000px',
    },
    table: {
        minWidth: 1080,
    },
    progress: {},
});

class App extends Component {
    // 서버에 접근하여 데이터를 받는 기능
    state = {
        customers: '',
        completed: 0,
    };

    // 모든 컴포넌트가 마운트 완료 되었을 때 실행
    componentDidMount() {
        this.timer = setInterval(this.progress, 20);
        this.callApi()
            .then(res => this.setState({ customers: res }))
            .catch(err => console.log('Com', err));
    }

    // 비동기적으로 데이터를 접근하고 값을 반환
    callApi = async () => {
        const response = await fetch('/api/customers', {
            headers: {
                Accept: 'application / json',
            },
        });
        const body = await response.json();
        console.log('hola');
        return body;
    };

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    };

    render() {
        const classes = styles();
        return (
            <Paper className='classes.root'>
                <Table className='classes.table' stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>번호</TableCell>
                            <TableCell align='center'>이름</TableCell>
                            <TableCell align='center'>학번</TableCell>
                            <TableCell align='center'>학과</TableCell>
                            <TableCell align='center'>성별</TableCell>
                            <TableCell align='center'>기타</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.customers ? (
                            this.state.customers.map((c, index) => {
                                return (
                                    <Customer
                                        key={c.index}
                                        // key={c.id}
                                        id={c.id}
                                        name={c.name}
                                        studentId={c.studentId}
                                        department={c.department}
                                        gender={c.gender}
                                        etc={c.etc}
                                    />
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell colSpan='6' align='center'>
                                    <CircularProgress
                                        className={classes.progress}
                                        variant='indeterminate'
                                        value={this.state.completed}
                                    />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(styles)(App);
