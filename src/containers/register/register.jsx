import React, {Component} from 'react'
import {NavBar, WingBlank, List, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {register} from '../../redux/actions'
import Logo from '../../componnets/logo/logo'

const ListItem = List.Item

class Register extends Component {

  state = {
    username: '',
    password: '',
    password2: '',
    type: 'dashen'  // dashen/laoban
  }
  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  register = () => {
    console.log(this.state)
    this.props.register(this.state)
  }

  goLogin = () => {
    this.props.history.replace('/login')
  }

  render () {
    const {type} = this.state
    const {msg, redirectTo} = this.props.user
    if(redirectTo) {
      return <Redirect to={redirectTo}></Redirect>
    }

    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            {msg ? <p className='error-msg'>{msg}</p> : null}
            <InputItem
              placeholder='请输入用户名'
              onChange={val=> this.handleChange('username', val)}
            >
              用户名:
            </InputItem>
            <WhiteSpace/>
            <InputItem
              type='password'
              placeholder='请输入密码'
              onChange={val=> this.handleChange('password', val)}
            >
              密码:
            </InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入确认密码' onChange={val=> this.handleChange('password2', val)}>确认密码: </InputItem>
            <WhiteSpace/>
            <List.Item>
              <span>用户类型: </span>&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='laoban'} onChange={() => this.handleChange('type', 'laoban')}>老板</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='dashen'} onChange={() => this.handleChange('type', 'dashen')}>大神</Radio>
            </List.Item>
            <WhiteSpace/>
            <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.goLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),  // {user: user()}
  {register}
)(Register)