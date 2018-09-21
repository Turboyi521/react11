import React, {Component} from 'react'
import {connect} from 'react-redux'
const Item =List.Item
const Brief =Item.Briet

class Personal extends React.Component {
  logout =() =>{
    Model.alert('退出','确认退出登录？'，[
      {
        text:'取消',
        onPress:()=>console.log('cancel')

      },{
      text:'确认',
        onPress:()=>{
        Cookies.remove('userd')
          this.props.resetUser()
        }
      }
    ])
  }


  render () {
    const {username, header, post, info, salary, company} = this.props.user
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/images/${header}.png`)} style={{width: 50}} alt="header"/>}
          title={username}
          message={company}
        />

        <List renderHeader={() => '相关信息'}>
          <Item multipleLine>
            {post ? <Brief>职位: {post}</Brief> : null}
            {info ? <Brief>简介: {info}</Brief> : null}
            {salary ? <Brief>薪资: {salary}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace/>
        <List>
          <Button type='warning' onClick={this.logout}>退出登录</Button>
        </List>
      </div>
    )
  }
}

export default connect(
  state => ({user:state.user}),
  {resetUser}
)(Personal)