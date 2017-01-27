define("banana", ["require", "exports"], function (require, exports) {
    "use strict";

    var Bar = (function () {
        function Bar() {
        }
        Bar.prototype.barTender = function () { console.log('Would you like some of my horse\'s sweet lemonade?'); };
        return Bar;
    }());
    var Foo = (function () {
        function Foo() {
        }
        Foo.prototype.fooThis = function () { console.log('FFFFFFFFFFFFUUUUUUUUU'); };
        return Foo;
    }());
    var Moo = (function () {
        function Moo() {
            this.foo = new Foo();
            this.bar = new Bar();
        }
        Moo.prototype.moochosChaos = function () {
            this.bar.barTender();
            this.foo.fooThis();
            console.log('Your horse is amazing indeed, Sir.');
        };
        return Moo;
    }());

    exports.Banana = {Bar: Bar, Foo: Foo, Moo: Moo};
});
