import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {dateTimeFormat} from "../../utils/formatTools";
import {getDefaultData} from "../../utils/helper";

// import * as actions from '../../actions/index';

class LogScene extends Component {

  state={
    isLogging:false,
  };

  onLogging = () => {
    this.setState({ isLogging: true })
  };

  goDiscovery = () => {
    this.props.history.push('/discovery')
  }

  render() {


    // TODO(1): days in a row  연속 접속일 기능 구현
    // TODO: (user.lastLogDay !== undefined && user.lastLogDay === yesterday) ? days ++  : days: 1)
    // lastLogDay 가 undefined 가 아니고 어제날짜면 day++ 이 말은 다시 해석하면
    // lastLogDay 가 없거나 (처음 접속) 연속된 접속이 아니면 days 를 1로 설정한다는 뜻
    // 지금은 하드코딩 중이여서 데이터를 직접 수정할 수 없으니 이 기능은 서버 구축하고 API 따와서 추가할 것
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    dateTimeFormat(yesterday);

    // TODO(2): timeStack  누적 접속시간 구현
    // TODO: 이것도 데이터 수정이 필요한 파트라서 서버 구축한 담에 구현할 것.

    // TODO(3): gage 측정하는 파트에서는 reduxForm 설정해서 input 받을 것.
    // TODO(4): user.log.completed 필드로 업데이트해야 함 헤헤헤 할거 개 많넹.

    const user = getDefaultData('user')[0];
    const { userId } = this.props.match.params;
    const quotes= getDefaultData('quotes');
    let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    return (
      <div>
        {
          (this.state.isLogging)
            ? <div>gages</div>
            : (
              <div>
                <div>
                  <span>{`누적시간 ${user.timeStack}`}</span>
                  <span>{`연속도전 ${user.days}일`}</span>
                </div>
                <h4>{randomQuote}</h4>
                <div>
                  <button onClick={this.onLogging}>로그</button>
                  <button onClick={this.goDiscovery}>완료</button>
                </div>
              </div>
            )
        }

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


export default LogScene = withRouter(connect(
  mapStateToProps,
  null
)(LogScene));
