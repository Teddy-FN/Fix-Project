var DatePicker = React.createClass({
    getInitialState: function() {
        var def = this.props.selected || new Date();
    	return {
            view: DateUtilities.clone(def),
            selected: DateUtilities.clone(def),
    	    minDate: null,
    	    maxDate: null,
    	    visible: false
    	};
    },

    componentDidMount: function() {
    	document.addEventListener("click", function(e) {
            if (this.state.visible && e.target.className !== "date-picker-trigger" && !this.parentsHaveClassName(e.target, "date-picker"))
                this.hide();
    	}.bind(this));
    },

    parentsHaveClassName: function(element, className) {
    	var parent = element;
    	while (parent) {
            if (parent.className && parent.className.indexOf(className) > -1)
                return true;

            parent = parent.parentNode;
  }
    },

    setMinDate: function(date) {
        this.setState({ minDate: date });
    },

    setMaxDate: function(date) {
        this.setState({ maxDate: date });
    },

    onSelect: function(day) {
        this.setState({ selected: day });
        this.props.onSelect(day);
        this.hide();
    },

    show: function() {
        this.setState({ visible: true });
    },

    hide: function() {
        this.setState({ visible: false });
    },

    render: function() {
        return React.createElement("div", {className: "ardp-date-picker"},
            React.createElement("input", {type: "text", className: "date-picker-trigger", readOnly: true, value: DateUtilities.toString(this.state.selected), onClick: this.show}),

            React.createElement(Calendar, {visible: this.state.visible, view: this.state.view, selected: this.state.selected, onSelect: this.onSelect, minDate: this.state.minDate, maxDate: this.state.maxDate})
        );
    }
});