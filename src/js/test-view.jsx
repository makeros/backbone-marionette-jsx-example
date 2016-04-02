
module.exports = Marionette.ItemView.extend({

    ui: {
        btn1: ".js_btn_1",
        btn2: ".js_btn_2",
        btn3: ".js_btn_3"
    },

    events: {
        "click @ui.btn1": function () {
            this.model.set("title", this.model.get("title") + "a");
        },
        "click @ui.btn3": function () {
            this.trigger("poke-another-view");
        },
        "click @ui.btn2": function () {

            var checkboxtAttrs = this.model.get("checkboxtAttrs");

            checkboxtAttrs = (checkboxtAttrs.checked) ? {} : {checked: "checked"}

            this.model.set({
              "checked": !this.model.get("checked"),
              "checkboxtAttrs": checkboxtAttrs
            });

        }
    },

    templateHelpers: {
        testFn: function () {
            return (
                <span>test helper fn</span>
            );
        },
        inputFn: function (attrs) {
            return (
                <div>
                    <input type="checkbox" class="js_btn_2" {...attrs} />
                    {attrs.checked ? "Checked" : "not Checked"}
                </div>
            );
        }
    },

    template: function  (data) {
        return (
            <div>
                <div>
                    <button type="button" class="js_btn_1">{data.title}</button>
                </div>
                {data.inputFn(data.checkboxtAttrs)}
                <div>
                    <input type="text" value={data.inputText} />
                </div>
                <div>
                {data.testFn()}
                </div>
                <div>
                    {_.each(data.arr, function (item) {
                        return (
                            <span>{item}</span>
                        )
                    })}
                </div>
                <div>
                    <button type="button" class="js_btn_3">Add new child</button>
                </div>
          </div>
        )
    },

    initialize: function () {
        this.model = new Backbone.Model({
            title: "dummy title",
            inputText: "ala ma kota",
            arr: ["1", "2", "3", "4"],
            checkboxtAttrs: {
                checked: "checked"
            }
        });

        this.model.on("change", this.render);
    }

});
