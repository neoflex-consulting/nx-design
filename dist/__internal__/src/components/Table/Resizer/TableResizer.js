import { __extends } from "tslib";
import './TableResizer.css';
import React from 'react';
import { cn } from '../../../utils/bem';
var cnTableResizer = cn('TableResizer');
/* Сделано классом, чтобы хэндлеры событий на document могли иметь доступ к актуальному стэйту/пропсам без пересоздания подписок */
var TableResizer = /** @class */ (function (_super) {
    __extends(TableResizer, _super);
    function TableResizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isDragging: false
        };
        _this.onMouseDown = function () {
            _this.setState({ isDragging: true });
            document.addEventListener('mousemove', _this.onMouseMove);
            document.addEventListener('mouseup', _this.onMouseUp);
        };
        _this.onMouseMove = function (e) {
            if (e.movementX) {
                _this.props.onResize(e.movementX);
            }
        };
        _this.onMouseUp = function () {
            _this.setState({ isDragging: false });
            _this.removeListeners();
        };
        _this.removeListeners = function () {
            document.removeEventListener('mousemove', _this.onMouseMove);
            document.removeEventListener('mouseup', _this.onMouseUp);
        };
        return _this;
    }
    TableResizer.prototype.componentWillUnmount = function () {
        this.removeListeners();
    };
    TableResizer.prototype.render = function () {
        return (React.createElement("div", { className: cnTableResizer({
                isDragging: this.state.isDragging,
                isVisible: this.props.isVisible
            }), "aria-hidden": true, style: { height: this.props.height, top: this.props.top }, onMouseDown: this.onMouseDown, onDoubleClick: this.props.onDoubleClick }));
    };
    return TableResizer;
}(React.Component));
export { TableResizer };
