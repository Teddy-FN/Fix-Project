// var TimePicker = React.createClass({
//     getInitialState: function getInitialState() {
//         return {
//             visible: false,
//             hour: 12,
//             minute: 0,
//             position: {
//                 top: 0,
//                 left: 0
//             }
//         };
//     },

//     componentWillMount: function componentWillMount() {
//         document.addEventListener("click", this.hideOnDocumentClick);
//     },

//     componentWillUnmount: function componentWillUnmount() {
//         document.removeEventListener("click", this.hideOnDocumentClick);
//     },

//     show: function show() {
//         var trigger = this.refs.trigger.getDOMNode(),
//             rect = trigger.getBoundingClientRect(),
//             isTopHalf = rect.top > window.innerHeight / 2;

//         this.setState({
//             visible: true,
//             position: {
//                 top: isTopHalf ? rect.top + window.scrollY - CLOCK_SIZE - 3 : rect.top + trigger.clientHeight + window.scrollY + 3,
//                 left: rect.left
//             }
//         });
//     },

//     hide: function hide() {
//         this.setState({
//             visible: false
//         });
//     },

//     hideOnDocumentClick: function hideOnDocumentClick(e) {
//         if (!_parentsHaveClassName(e.target, "time-picker")) this.hide();
//     },

//     onTimeChanged: function onTimeChanged(hour, minute, am) {
//         this.setState({
//             hour: hour,
//             minute: minute,
//         });
//     },

//     formatTime: function formatTime() {
//         return this.state.hour + ":" + _pad(this.state.minute) + " ");
//     },

//     render: function render() {
//         return <div className="time-picker">
//             <input ref="trigger" type="text" readOnly="true" value={_getTimeString(this.state.hour, this.state.minute, this.state.am)} onClick={this.show} />
//             <Clock visible={this.state.visible} position={this.state.position} onTimeChanged={this.onTimeChanged} onDone={this.onDone} hour={this.state.hour} minute={this.state.minute} />
//         </div>;
//     }
// });