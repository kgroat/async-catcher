'use strict';

function catcher(originalFunction, handler) {
    return function (req, res, next) {
        var callingArguments = Array.prototype.slice.call(arguments);
        function handleError(err) {
            if (typeof handler === 'function') {
                Array.prototype.splice.call(callingArguments, 0, 0, err);
                return handler.apply(process, callingArguments);
            } else {
                return next(err);
            }
        }
        try {
            var originalReturn = originalFunction.apply(null, arguments);
            if (originalReturn && typeof originalReturn.catch === 'function') {
                originalReturn.catch(handleError);
            }
        } catch (e) {
            handleError(e);
        }
    };
}

module.exports = catcher;