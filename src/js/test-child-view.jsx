module.exports = Marionette.ItemView.extend({

    events: {
        "click button": function () {
            alert("Hi! My name is " + this.model.get("name"))
        }
    },

    template: function (data) {
        return (
            <div>
                <button>{data.name}</button>
            </div>
        )
    }
});
