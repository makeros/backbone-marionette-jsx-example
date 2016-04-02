module.exports = function () {
    function __setAttributes(element, attributes) {
        var isPlainObject = Object.prototype.toString.call(attributes) === '[object Object]' && typeof attributes.constructor === 'function' && Object.prototype.toString.call(attributes.constructor.prototype) === '[object Object]' && attributes.constructor.prototype.hasOwnProperty('isPrototypeOf');
        if (isPlainObject) {
            for (var key in attributes) {
                element.setAttribute(key, attributes[key]);
            }
        } else {
            throw new DOMException('Failed to execute \'setAttributes\' on \'Element\': ' + Object.prototype.toString.call(attributes) + ' is not a plain object.');
        }
    }
    function __appendChildren(element, children) {
        children = Array.isArray(children) ? children : [children];
        children.forEach(function (child) {
            if (child instanceof HTMLElement) {
                element.appendChild(child);
            } else if (child) {
                element.appendChild(document.createTextNode(child.toString()));
            } else {
                throw new DOMException('Failed to execute \'appendChildren\' on \'Element\': ' + Object.prototype.toString.call(child) + ' is not valid.');
            }
        });
    }
    (function() {
      if (typeof HTMLElement.prototype.appendChildren !== 'function') {
        HTMLElement.prototype.appendChildren = function(children) {
          return __appendChildren(this, children);
        }
      }
    })();
    (function() {
      if (typeof HTMLElement.prototype.setAttributes !== 'function') {
        HTMLElement.prototype.setAttributes = function(attributes) {
          return __setAttributes(this, attributes);
        };
      }
    })();
};
