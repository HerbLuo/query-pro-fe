(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['query-pro-fe'] = factory(typeof this['query-pro-fe'] === 'undefined' ? {} : this['query-pro-fe']);
}(this, function (_) {
  'use strict';
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  WHERE_FIELD.prototype = Object.create(QueryFieldType.prototype);
  WHERE_FIELD.prototype.constructor = WHERE_FIELD;
  ORDER_BY_FIELD.prototype = Object.create(QueryFieldType.prototype);
  ORDER_BY_FIELD.prototype.constructor = ORDER_BY_FIELD;
  QueryField.prototype = Object.create(FinalQueryField.prototype);
  QueryField.prototype.constructor = QueryField;
  QueryFieldJs.prototype = Object.create(QueryField.prototype);
  QueryFieldJs.prototype.constructor = QueryFieldJs;
  QueryProJs.prototype = Object.create(QueryProImpl.prototype);
  QueryProJs.prototype.constructor = QueryProJs;
  function toMutableList(_this_) {
    return ArrayList_init_$Create$_0(asCollection(_this_));
  }
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_2(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$break: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_2(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_2(truncated);
      Unit_getInstance();
    }buffer.append_2(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_2(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_14();
    $l$break: while (tmp0_iterator.hasNext_1()) {
      var element = tmp0_iterator.next_1();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_2(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_2(truncated);
      Unit_getInstance();
    }buffer.append_2(postfix);
    Unit_getInstance();
    return buffer;
  }
  function _no_name_provided_(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided_.prototype.invoke = function (it) {
    return it === this._this$0 ? '(this Collection)' : toString(it);
  };
  _no_name_provided_.prototype.invoke_44 = function (p1) {
    return this.invoke((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.isEmpty_4 = function () {
    return this._get_size__4() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory(this$0) {
    var i = new _no_name_provided_(this$0);
    return function (p1) {
      return i.invoke(p1);
    };
  }
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.checkPositionIndex = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.orderedHashCode = function (c) {
    var hashCode_0 = 1;
    var tmp0_iterator = c.iterator_14();
    while (tmp0_iterator.hasNext_1()) {
      var e = tmp0_iterator.next_1();
      var tmp = imul(31, hashCode_0);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  Companion_0.prototype.orderedEquals = function (c, other) {
    if (!(c._get_size__4() === other._get_size__4()))
      return false;
    var otherIterator = other.iterator_14();
    var tmp0_iterator = c.iterator_14();
    while (tmp0_iterator.hasNext_1()) {
      var elem = tmp0_iterator.next_1();
      var elemOther = otherIterator.next_1();
      if (!equals(elem, elemOther)) {
        return false;
      }}
    return true;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion_0();
    return Companion_instance;
  }
  function asCollection(_this_) {
    return new ArrayAsCollection(_this_, false);
  }
  function ArrayAsCollection(values, isVarargs) {
    this._values = values;
    this._isVarargs = isVarargs;
  }
  ArrayAsCollection.prototype._get_size__4 = function () {
    return this._values.length;
  };
  ArrayAsCollection.prototype.isEmpty_4 = function () {
    var tmp0_isEmpty_0 = this._values;
    return tmp0_isEmpty_0.length === 0;
  };
  ArrayAsCollection.prototype.iterator_14 = function () {
    return arrayIterator(this._values);
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function addAll(_this_, elements) {
    return _this_.addAll_2(asList(elements));
  }
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_2(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_2(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this_.append_1(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_2(toString(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function copyToArray_0(collection) {
    var tmp;
    if (collection.toArray !== undefined) {
      var tmp0_unsafeCast_0 = collection.toArray();
      tmp = tmp0_unsafeCast_0;
    } else {
      {
        var tmp1_unsafeCast_0 = copyToArrayImpl_0(collection);
        tmp = tmp1_unsafeCast_0;
      }
    }
    return tmp;
  }
  function copyToArrayImpl_0(collection) {
    var array = [];
    var iterator = collection.iterator_14();
    while (iterator.hasNext_1()) {
      array.push(iterator.next_1());
    }
    return array;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.addAll_2 = function (elements) {
    this.checkIsMutable_1();
    var modified = false;
    var tmp0_iterator = elements.iterator_14();
    while (tmp0_iterator.hasNext_1()) {
      var element = tmp0_iterator.next_1();
      if (this.add_4(element))
        modified = true;
    }
    return modified;
  };
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_1 = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function IteratorImpl($outer) {
    this._$this = $outer;
    this._index = 0;
    this._last = -1;
  }
  IteratorImpl.prototype.hasNext_1 = function () {
    return this._index < this._$this._get_size__4();
  };
  IteratorImpl.prototype.next_1 = function () {
    if (!this.hasNext_1())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index;
    tmp0_this._index = tmp1 + 1 | 0;
    tmp._last = tmp1;
    return this._$this.get_10(this._last);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__0 = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__0 = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.add_4 = function (element) {
    this.checkIsMutable_1();
    this.add_3(this._get_size__4(), element);
    return true;
  };
  AbstractMutableList.prototype.iterator_14 = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function ArrayList_init_$Init$(initialCapacity, $this) {
    ArrayList.call($this, []);
    return $this;
  }
  function ArrayList_init_$Create$(initialCapacity) {
    return ArrayList_init_$Init$(initialCapacity, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(elements, $this) {
    ArrayList.call($this, copyToArray_0(elements));
    return $this;
  }
  function ArrayList_init_$Create$_0(elements) {
    return ArrayList_init_$Init$_0(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    Companion_getInstance().checkElementIndex(index, $this._get_size__4());
    return index;
  }
  function insertionRangeCheck($this, index) {
    Companion_getInstance().checkPositionIndex(index, $this._get_size__4());
    return index;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype._get_size__4 = function () {
    return this._array.length;
  };
  ArrayList.prototype.get_10 = function (index) {
    var tmp = this._array[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_4 = function (element) {
    this.checkIsMutable_1();
    var tmp0_asDynamic_0 = this._array;
    tmp0_asDynamic_0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0();
    tmp0_this._set_modCount__0(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_3 = function (index, element) {
    this.checkIsMutable_1();
    var tmp0_asDynamic_0 = this._array;
    tmp0_asDynamic_0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0();
    tmp0_this._set_modCount__0(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.addAll_2 = function (elements) {
    this.checkIsMutable_1();
    if (elements.isEmpty_4())
      return false;
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp0_plus_0 = tmp0_this._array;
    var tmp1_plus_0 = copyToArray_0(elements);
    tmp._array = tmp0_plus_0.concat(tmp1_plus_0);
    var tmp1_this = this;
    var tmp2 = tmp1_this._get_modCount__0();
    tmp1_this._set_modCount__0(tmp2 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array);
  };
  ArrayList.prototype.toArray_0 = function () {
    return [].slice.call(this._array);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_0();
  };
  ArrayList.prototype.checkIsMutable_1 = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__2();
  }
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this._jClass = jClass;
  }
  KClassImpl.prototype._get_jClass__2 = function () {
    return this._jClass;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals(this._get_jClass__2(), other._get_jClass__2());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__2();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this._givenSimpleName = givenSimpleName;
    this._isInstanceFunction = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    return KClassImpl.prototype.equals.call(this, other) ? this._givenSimpleName === other._givenSimpleName : false;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__2 = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this._simpleName = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__2 = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype._get_jClass__2 = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp0_safe_receiver = jClass.$metadata$;
    var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
    tmp._simpleName_0 = tmp0_unsafeCast_0;
  }
  SimpleKClassImpl.prototype._get_simpleName__2 = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  var functionClasses;
  function _no_name_provided__0() {
  }
  _no_name_provided__0.prototype.invoke_41 = function (it) {
    return isObject(it);
  };
  _no_name_provided__0.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1() {
  }
  _no_name_provided__1.prototype.invoke_41 = function (it) {
    return isNumber(it);
  };
  _no_name_provided__1.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__2() {
  }
  _no_name_provided__2.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__2.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3() {
  }
  _no_name_provided__3.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__3.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__4() {
  }
  _no_name_provided__4.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__4.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__5() {
  }
  _no_name_provided__5.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__5.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__6() {
  }
  _no_name_provided__6.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__6.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__7() {
  }
  _no_name_provided__7.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__7.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__8() {
  }
  _no_name_provided__8.prototype.invoke_41 = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__8.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__9() {
  }
  _no_name_provided__9.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__9.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__10() {
  }
  _no_name_provided__10.prototype.invoke_41 = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__10.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__11() {
  }
  _no_name_provided__11.prototype.invoke_41 = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__11.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__12() {
  }
  _no_name_provided__12.prototype.invoke_41 = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__12.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__13() {
  }
  _no_name_provided__13.prototype.invoke_41 = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__13.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_41 = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__14.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15() {
  }
  _no_name_provided__15.prototype.invoke_41 = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__15.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_41 = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__16.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17() {
  }
  _no_name_provided__17.prototype.invoke_41 = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__17.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__18() {
  }
  _no_name_provided__18.prototype.invoke_41 = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__18.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__19.prototype.invoke_41 = function (it) {
    var tmp;
    if (typeof it === 'function') {
      tmp = it.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__19.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp0_unsafeCast_0 = Object;
    var tmp_0 = tmp0_unsafeCast_0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_0());
    var tmp_1 = this;
    var tmp0_unsafeCast_0_0 = Number;
    var tmp_2 = tmp0_unsafeCast_0_0;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_1());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp0_unsafeCast_0_1 = Boolean;
    var tmp_4 = tmp0_unsafeCast_0_1;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_2());
    var tmp_5 = this;
    var tmp0_unsafeCast_0_2 = Number;
    var tmp_6 = tmp0_unsafeCast_0_2;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_3());
    var tmp_7 = this;
    var tmp0_unsafeCast_0_3 = Number;
    var tmp_8 = tmp0_unsafeCast_0_3;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_4());
    var tmp_9 = this;
    var tmp0_unsafeCast_0_4 = Number;
    var tmp_10 = tmp0_unsafeCast_0_4;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_5());
    var tmp_11 = this;
    var tmp0_unsafeCast_0_5 = Number;
    var tmp_12 = tmp0_unsafeCast_0_5;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_6());
    var tmp_13 = this;
    var tmp0_unsafeCast_0_6 = Number;
    var tmp_14 = tmp0_unsafeCast_0_6;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_7());
    var tmp_15 = this;
    var tmp0_unsafeCast_0_7 = Array;
    var tmp_16 = tmp0_unsafeCast_0_7;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_8());
    var tmp_17 = this;
    var tmp0_unsafeCast_0_8 = String;
    var tmp_18 = tmp0_unsafeCast_0_8;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_9());
    var tmp_19 = this;
    var tmp0_unsafeCast_0_9 = Error;
    var tmp_20 = tmp0_unsafeCast_0_9;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_10());
    var tmp_21 = this;
    var tmp0_unsafeCast_0_10 = Array;
    var tmp_22 = tmp0_unsafeCast_0_10;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_11());
    var tmp_23 = this;
    var tmp0_unsafeCast_0_11 = Uint16Array;
    var tmp_24 = tmp0_unsafeCast_0_11;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_12());
    var tmp_25 = this;
    var tmp0_unsafeCast_0_12 = Int8Array;
    var tmp_26 = tmp0_unsafeCast_0_12;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_13());
    var tmp_27 = this;
    var tmp0_unsafeCast_0_13 = Int16Array;
    var tmp_28 = tmp0_unsafeCast_0_13;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_14());
    var tmp_29 = this;
    var tmp0_unsafeCast_0_14 = Int32Array;
    var tmp_30 = tmp0_unsafeCast_0_14;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_15());
    var tmp_31 = this;
    var tmp0_unsafeCast_0_15 = Array;
    var tmp_32 = tmp0_unsafeCast_0_15;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_16());
    var tmp_33 = this;
    var tmp0_unsafeCast_0_16 = Float32Array;
    var tmp_34 = tmp0_unsafeCast_0_16;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_17());
    var tmp_35 = this;
    var tmp0_unsafeCast_0_17 = Float64Array;
    var tmp_36 = tmp0_unsafeCast_0_17;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_18());
  }
  PrimitiveClasses_0.prototype._get_anyClass_ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass_ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass_ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass_ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass_ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass_ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass_ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass_ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass_ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass_ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass_ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass_ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass_ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass_ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass_ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass_ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass_ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass_ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass_ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass_ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = functionClasses[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_unsafeCast_0_3 = Function;
      var tmp_0 = tmp0_unsafeCast_0_3;
      var tmp_1 = '' + 'Function' + arity;
      var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_19(arity));
      var tmp1_asDynamic_0_5 = functionClasses;
      tmp1_asDynamic_0_5[arity] = result_2;
      tmp = result_2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses_0.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses_0.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass_
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses_0();
    return PrimitiveClasses_instance;
  }
  function _no_name_provided_$factory_0() {
    var i = new _no_name_provided__0();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_1() {
    var i = new _no_name_provided__1();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__2();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_3() {
    var i = new _no_name_provided__3();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_4() {
    var i = new _no_name_provided__4();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_5() {
    var i = new _no_name_provided__5();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_6() {
    var i = new _no_name_provided__6();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__7();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__8();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__9();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__10();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__11();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__12();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__13();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_19($arity) {
    var i = new _no_name_provided__19($arity);
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function functionClasses$init$() {
    var tmp0_arrayOfNulls_0 = 0;
    return fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
  }
  function getKClass_0(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      tmp = getKClassM_0(jClass);
    } else {
      tmp = getKClass1_0(jClass);
    }
    return tmp;
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0]);
        break;
      case 0:
        var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
        tmp = tmp0_unsafeCast_0;
        break;
      default:var tmp1_unsafeCast_0 = new ErrorKClass();
        tmp = tmp1_unsafeCast_0;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
      return tmp0_unsafeCast_0;
    }var metadata = jClass.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression_0(e) {
    var tmp0_subject = typeof e;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = PrimitiveClasses_getInstance()._stringClass;
        break;
      case 'number':
        var tmp_0;
        var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
        if (tmp0_asDynamic_0 === e) {
          tmp_0 = PrimitiveClasses_getInstance()._intClass;
        } else {
          {
            tmp_0 = PrimitiveClasses_getInstance()._doubleClass;
          }
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance()._booleanClass;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        tmp = tmp_1.functionClass(e.length);
        break;
      default:var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance()._booleanArrayClass;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._charArrayClass;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._byteArrayClass;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._shortArrayClass;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._intArrayClass;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._longArrayClass;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._floatArrayClass;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._doubleArrayClass;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass_0(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance()._arrayClass;
                          } else {
                            {
                              var constructor = Object.getPrototypeOf(e).constructor;
                              var tmp_3;
                              if (constructor === Object) {
                                tmp_3 = PrimitiveClasses_getInstance()._anyClass;
                              } else if (constructor === Error) {
                                tmp_3 = PrimitiveClasses_getInstance()._throwableClass;
                              } else {
                                var jsClass_0 = constructor;
                                tmp_3 = getKClass1_0(jsClass_0);
                              }
                              tmp_2 = tmp_3;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2;
        break;
    }
    var tmp1_unsafeCast_0 = tmp;
    return tmp1_unsafeCast_0;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder_init_$Init$($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$() {
    return StringBuilder_init_$Init$(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype.append_1 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_2 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString(value);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function Char() {
  }
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function toString(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_0(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function arrayIterator(array) {
    return new _no_name_provided__20(array);
  }
  function _no_name_provided__20($array) {
    this._$array = $array;
    this._index_0 = 0;
  }
  _no_name_provided__20.prototype.hasNext_1 = function () {
    return !(this._index_0 === this._$array.length);
  };
  _no_name_provided__20.prototype.next_1 = function () {
    var tmp;
    if (!(this._index_0 === this._$array.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_0;
      tmp0_this._index_0 = tmp1 + 1 | 0;
      tmp = this._$array[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_0);
    }
    return tmp;
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  var buf;
  var bufFloat64;
  var bufInt32;
  var lowIndex;
  var highIndex;
  function getNumberHashCode(obj) {
    var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
    if (tmp0_unsafeCast_0 === obj) {
      return numberToInt(obj);
    } else {
    }
    bufFloat64[0] = obj;
    return imul(bufInt32[highIndex], 31) + bufInt32[lowIndex] | 0;
  }
  function bufFloat64$init$() {
    var tmp0_unsafeCast_0 = new Float64Array(buf);
    return tmp0_unsafeCast_0;
  }
  function bufInt32$init$() {
    var tmp0_unsafeCast_0 = new Int32Array(buf);
    return tmp0_unsafeCast_0;
  }
  function lowIndex$init$() {
    bufFloat64[0] = -1.0;
    return !(bufInt32[0] === 0) ? 1 : 0;
  }
  function contentEqualsInternal(_this_, other) {
    var a = _this_;
    var b = other;
    if (a === b)
      return true;
    if (((a == null ? true : b == null) ? true : !isArrayish(b)) ? true : a.length != b.length)
      return false;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(a[i], b[i])) {
          return false;
        }}
       while (inductionVariable < last);
    return true;
  }
  function contentHashCodeInternal(_this_) {
    var a = _this_;
    if (a == null)
      return 0;
    var result = 1;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = imul(result, 31) + hashCode(a[i]) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_20(), 24, null);
  }
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_41 = function (it) {
    return toString_0(it);
  };
  _no_name_provided__21.prototype.invoke_44 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
    return tmp0_unsafeCast_0;
  }
  function equals(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }if (obj2 == null) {
      return false;
    }if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }if (obj1 !== obj1) {
      return obj2 !== obj2;
    }if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp0_asDynamic_0 = 1;
          var tmp_1 = tmp0_asDynamic_0 / obj1;
          var tmp1_asDynamic_0 = 1;
          tmp_0 = tmp_1 === tmp1_asDynamic_0 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }return obj1 === obj2;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        if (obj) {
          tmp_0 = 1;
        } else {
          {
            tmp_0 = 0;
          }
        }

        tmp = tmp_0;
        break;
      default:tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function toString_0(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp0_unsafeCast_0 = o.toString();
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      instance.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
    return tmp0_unsafeCast_0;
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function Long() {
  }
  Long.prototype.toInt_4 = function () {
    return this._low;
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_4();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp0_unsafeCast_0 = Array.isArray(obj);
    return tmp0_unsafeCast_0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }}
    }var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      tmp = !obj.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js_(getKClass_0(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return isJsArray(a) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function contentEquals(_this_, other) {
    return contentEqualsInternal(_this_, other);
  }
  function contentHashCode(_this_) {
    return contentHashCodeInternal(_this_);
  }
  function asList(_this_) {
    return new ArrayList(_this_);
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$(message) {
    var tmp = RuntimeException_init_$Init$_0(message, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack in rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack | rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function jsTypeOf(value_hack) {
    var tmp0_unsafeCast_0 = typeof value_hack;
    return tmp0_unsafeCast_0;
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp0_unsafeCast_0 = obj_hack instanceof jsClass_hack;
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = lhs_hack & rhs_hack;
    return tmp0_unsafeCast_0;
  }
  function WHERE_FIELD() {
    WHERE_FIELD_instance = this;
    QueryFieldType.call(this);
  }
  WHERE_FIELD.$metadata$ = {
    simpleName: 'WHERE_FIELD',
    kind: 'object',
    interfaces: []
  };
  var WHERE_FIELD_instance;
  function WHERE_FIELD_getInstance() {
    if (WHERE_FIELD_instance == null)
      new WHERE_FIELD();
    return WHERE_FIELD_instance;
  }
  function ORDER_BY_FIELD() {
    ORDER_BY_FIELD_instance = this;
    QueryFieldType.call(this);
  }
  ORDER_BY_FIELD.$metadata$ = {
    simpleName: 'ORDER_BY_FIELD',
    kind: 'object',
    interfaces: []
  };
  var ORDER_BY_FIELD_instance;
  function ORDER_BY_FIELD_getInstance() {
    if (ORDER_BY_FIELD_instance == null)
      new ORDER_BY_FIELD();
    return ORDER_BY_FIELD_instance;
  }
  function QueryFieldType() {
  }
  QueryFieldType.$metadata$ = {
    simpleName: 'QueryFieldType',
    kind: 'class',
    interfaces: []
  };
  function IFieldGenerator() {
  }
  IFieldGenerator.$metadata$ = {
    simpleName: 'IFieldGenerator',
    kind: 'interface',
    interfaces: []
  };
  function FinalQueryField(queryStructure) {
    this._queryStructure = queryStructure;
  }
  FinalQueryField.prototype.limit_2 = function (limit) {
    var tmp = this._get_createField__1();
    return tmp(this._queryStructure.copy$default(null, null, null, null, null, limit, 31, null));
  };
  FinalQueryField.prototype.getColumn_1 = function (field) {
    var tmp0_plus_0 = this._queryStructure._fields;
    var tmp0_arrayOf_0_1 = [field];
    var tmp = tmp0_plus_0.concat(tmp0_arrayOf_0_1);
    var newQueryStructure = this._queryStructure.copy$default(null, tmp, null, null, null, null, 61, null);
    var result = this._get_createField__1()(newQueryStructure).run_1();
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$(result.length);
    var indexedObject = result;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item_2_3 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_mapTo_0_1.add_4(access(isObject(item_2_3) ? item_2_3 : THROW_CCE(), field._column));
      Unit_getInstance();
    }
    return tmp0_mapTo_0_1;
  };
  FinalQueryField.prototype.columnsLimiter_1 = function () {
    return this._get_createColumnsLimiterField__1()(this._queryStructure);
  };
  FinalQueryField.prototype.columnLimiter_1 = function () {
    return this._get_createColumnLimiterField__1()(this._queryStructure);
  };
  FinalQueryField.prototype.runLimit1_1 = function () {
    var tmp = this._get_createField__1();
    var results = tmp(this._queryStructure.copy$default(null, null, null, null, null, 1, 31, null)).run_1();
    if (results.length === 0) {
      return null;
    } else {
    }
    return results[0];
  };
  FinalQueryField.prototype.run_1 = function () {
    var tmp = [];
    return isArray(tmp) ? tmp : THROW_CCE();
  };
  FinalQueryField.prototype.pageable_1 = function () {
  };
  FinalQueryField.$metadata$ = {
    simpleName: 'FinalQueryField',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__22(this$0) {
    this._this$0_0 = this$0;
  }
  _no_name_provided__22.prototype.invoke_43 = function (qs) {
    return this._this$0_0._get_createWhereField__2()(qs);
  };
  _no_name_provided__22.prototype.invoke_44 = function (p1) {
    return this.invoke_43(p1 instanceof QueryStructure ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function QueryField(queryStructure) {
    FinalQueryField.call(this, queryStructure);
    this._queryStructure_0 = queryStructure;
    var tmp = this;
    tmp._createField = _no_name_provided_$factory_21(this);
  }
  QueryField.prototype._get_queryStructure__0 = function () {
    return this._queryStructure_0;
  };
  QueryField.prototype._get_createField__1 = function () {
    return this._createField;
  };
  QueryField.prototype.customColumn_0 = function (column) {
    return new QueryKeywords(Field_init_$Create$(null, column, 1, null), this._queryStructure_0, this._get_createWhereField__2());
  };
  QueryField.prototype.and_0 = function () {
    if (!equals(this._get_type__0(), WHERE_FIELD_getInstance())) {
      throw RuntimeException_init_$Create$('' + this._get_type__0() + ' can not call and, usage: .orderBy().id.desc().name.asc()');
    }return this instanceof QueryField ? this : THROW_CCE();
  };
  QueryField.prototype.or_0 = function (factor) {
    if (!equals(this._get_type__0(), WHERE_FIELD_getInstance())) {
      throw RuntimeException_init_$Create$('' + this._get_type__0() + ' can not call and, usage: .orderBy().id.desc().name.asc()');
    }if (factor == null) {
      var tmp = this._get_createWhereField__2();
      var tmp0_plus_0 = this._queryStructure_0._where;
      var tmp1_plus_0 = WhereClause_init_$Create$(null, 'or', null, 5, null);
      var tmp0_arrayOf_0_1 = [tmp1_plus_0];
      var tmp_0 = tmp0_plus_0.concat(tmp0_arrayOf_0_1);
      return tmp(this._queryStructure_0.copy$default(null, null, null, tmp_0, null, null, 55, null));
    }var tmp_1 = this._get_createWhereField__2();
    var orWhereClauses = factor(tmp_1(QueryStructure_init_$Create$(null, null, null, null, null, null, 63, null)))._queryStructure_0._where;
    var tmp2_plus_0 = this._queryStructure_0._where;
    var tmp3_plus_0 = WhereClause_init_$Create$(null, 'or', orWhereClauses, 1, null);
    var tmp0_arrayOf_0_1_0 = [tmp3_plus_0];
    var newWhereClause = tmp2_plus_0.concat(tmp0_arrayOf_0_1_0);
    var tmp_2 = this._get_createWhereField__2();
    return tmp_2(this._queryStructure_0.copy$default(null, null, null, newWhereClause, null, null, 55, null));
  };
  QueryField.prototype.or$default_0 = function (factor, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      factor = null;
    return this.or_0(factor);
  };
  QueryField.prototype.andForeignField_0 = function (fields) {
    var newWhereClause = toMutableList(this._queryStructure_0._where);
    var indexedObject = fields;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var field = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      addAll(newWhereClause, field._queryStructure_0._where);
      Unit_getInstance();
    }
    var tmp = this._get_createWhereField__2();
    var tmp_0 = copyToArray_0(newWhereClause);
    return tmp(this._queryStructure_0.copy$default(null, null, null, tmp_0, null, null, 55, null));
  };
  QueryField.prototype.orderBy_4 = function () {
    return this._get_createOrderByField__2()(this._queryStructure_0);
  };
  QueryField.$metadata$ = {
    simpleName: 'QueryField',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_21(this$0) {
    var i = new _no_name_provided__22(this$0);
    return function (p1) {
      return i.invoke_43(p1);
    };
  }
  function with_0($this, whereClause) {
    var tmp0_plus_0 = $this._queryStructure_1._where;
    var tmp0_arrayOf_0_1 = [whereClause];
    var tmp = tmp0_plus_0.concat(tmp0_arrayOf_0_1);
    return $this._createQueryField($this._queryStructure_1.copy$default(null, null, null, tmp, null, null, 55, null));
  }
  function QueryKeywords(field, queryStructure, createQueryField) {
    this._field = field;
    this._queryStructure_1 = queryStructure;
    this._createQueryField = createQueryField;
    this._is = this;
    this._not = new QueryWithNotKeywords(this._field, this._queryStructure_1, this._createQueryField);
    this._ignoreCase = new QueryIgnoreCaseKeywords(this._field, this._queryStructure_1, this._createQueryField);
  }
  QueryKeywords.prototype._get_is_ = function () {
    return this._is;
  };
  QueryKeywords.prototype._get_not_ = function () {
    return this._not;
  };
  QueryKeywords.prototype._get_ignoreCase_ = function () {
    return this._ignoreCase;
  };
  QueryKeywords.prototype.equalsTo_1 = function (value) {
    return with_0(this, new WhereClause(this._field, '=', value));
  };
  QueryKeywords.prototype.between_0 = function (start, end) {
    var tmp0_arrayOf_0 = [start, end];
    return with_0(this, new WhereClause(this._field, 'between', tmp0_arrayOf_0));
  };
  QueryKeywords.prototype.lessThan = function (value) {
    return with_0(this, new WhereClause(this._field, '<', value));
  };
  QueryKeywords.prototype.lessThanOrEqual = function (value) {
    return with_0(this, new WhereClause(this._field, '<=', value));
  };
  QueryKeywords.prototype.graterThan = function (value) {
    return with_0(this, new WhereClause(this._field, '>', value));
  };
  QueryKeywords.prototype.graterThanOrEqual = function (value) {
    return with_0(this, new WhereClause(this._field, '>=', value));
  };
  QueryKeywords.prototype.like_1 = function (str) {
    return with_0(this, new WhereClause(this._field, 'like', str));
  };
  QueryKeywords.prototype.iN = function (values) {
    return with_0(this, new WhereClause(this._field, 'in', values));
  };
  QueryKeywords.prototype.nul_0 = function () {
    return with_0(this, WhereClause_init_$Create$(this._field, 'is null', null, 4, null));
  };
  QueryKeywords.prototype.isNull = function () {
    return with_0(this, WhereClause_init_$Create$(this._field, 'is null', null, 4, null));
  };
  QueryKeywords.prototype.isNotNull = function () {
    return with_0(this, WhereClause_init_$Create$(this._field, 'is not null', null, 4, null));
  };
  QueryKeywords.$metadata$ = {
    simpleName: 'QueryKeywords',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(QueryKeywords.prototype, 'is', {
    configurable: true,
    get: QueryKeywords.prototype._get_is_
  });
  Object.defineProperty(QueryKeywords.prototype, 'not', {
    configurable: true,
    get: QueryKeywords.prototype._get_not_
  });
  Object.defineProperty(QueryKeywords.prototype, 'ignoreCase', {
    configurable: true,
    get: QueryKeywords.prototype._get_ignoreCase_
  });
  function with_1($this, whereClause) {
    var tmp0_plus_0 = $this._queryStructure_2._where;
    var tmp0_arrayOf_0_1 = [whereClause];
    var tmp = tmp0_plus_0.concat(tmp0_arrayOf_0_1);
    return $this._createQueryField_0($this._queryStructure_2.copy$default(null, null, null, tmp, null, null, 55, null));
  }
  function QueryWithNotKeywords(field, queryStructure, createQueryField) {
    this._field_0 = field;
    this._queryStructure_2 = queryStructure;
    this._createQueryField_0 = createQueryField;
  }
  QueryWithNotKeywords.prototype.equalsTo_1 = function (value) {
    return with_1(this, new WhereClause(this._field_0, '<>', value));
  };
  QueryWithNotKeywords.prototype.between_0 = function (start, end) {
    var tmp0_arrayOf_0 = [start, end];
    return with_1(this, new WhereClause(this._field_0, 'not between', tmp0_arrayOf_0));
  };
  QueryWithNotKeywords.prototype.like_1 = function (str) {
    return with_1(this, new WhereClause(this._field_0, 'not like', str));
  };
  QueryWithNotKeywords.prototype.iN = function (values) {
    return with_1(this, new WhereClause(this._field_0, 'not in', values));
  };
  QueryWithNotKeywords.prototype.nul_0 = function () {
    return with_1(this, WhereClause_init_$Create$(this._field_0, 'is not null', null, 4, null));
  };
  QueryWithNotKeywords.$metadata$ = {
    simpleName: 'QueryWithNotKeywords',
    kind: 'class',
    interfaces: []
  };
  function upperField($this, field) {
    return Field_init_$Create$(null, '' + 'upper(' + field._table + '.' + field._column + ')', 1, null);
  }
  function with_2($this, whereClause) {
    var tmp0_plus_0 = $this._queryStructure_3._where;
    var tmp0_arrayOf_0_1 = [whereClause];
    var tmp = tmp0_plus_0.concat(tmp0_arrayOf_0_1);
    return $this._createQueryField_1($this._queryStructure_3.copy$default(null, null, null, tmp, null, null, 55, null));
  }
  function QueryIgnoreCaseKeywords(field, queryStructure, createQueryField) {
    this._field_1 = field;
    this._queryStructure_3 = queryStructure;
    this._createQueryField_1 = createQueryField;
  }
  QueryIgnoreCaseKeywords.prototype.equalsTo_1 = function (value) {
    return with_2(this, new WhereClause(upperField(this, this._field_1), '=', '' + 'upper(' + value + ')'));
  };
  QueryIgnoreCaseKeywords.prototype.like_1 = function (str) {
    return with_2(this, new WhereClause(upperField(this, this._field_1), 'like', '' + 'upper(' + str + ')'));
  };
  QueryIgnoreCaseKeywords.prototype.iN = function (values) {
    var tmp = upperField(this, this._field_1);
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$(values.length);
    var indexedObject = values;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item_2_3 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_mapTo_0_1.add_4('' + 'upper(' + item_2_3 + ')');
      Unit_getInstance();
    }
    return with_2(this, new WhereClause(tmp, 'in', tmp0_mapTo_0_1));
  };
  QueryIgnoreCaseKeywords.$metadata$ = {
    simpleName: 'QueryIgnoreCaseKeywords',
    kind: 'class',
    interfaces: []
  };
  function with_3($this, orderBy) {
    var tmp0_plus_0 = $this._queryStructure_4._orderBy;
    var tmp0_arrayOf_0_1 = [orderBy];
    var tmp = tmp0_plus_0.concat(tmp0_arrayOf_0_1);
    return $this._createQueryField_2($this._queryStructure_4.copy$default(null, null, null, null, tmp, null, 47, null));
  }
  function QueryOrderByKeywords(field, queryStructure, createQueryField) {
    this._field_2 = field;
    this._queryStructure_4 = queryStructure;
    this._createQueryField_2 = createQueryField;
  }
  QueryOrderByKeywords.prototype.asc = function () {
    return with_3(this, new OrderByClause(this._field_2, 'asc'));
  };
  QueryOrderByKeywords.prototype.desc = function () {
    return with_3(this, new OrderByClause(this._field_2, 'desc'));
  };
  QueryOrderByKeywords.$metadata$ = {
    simpleName: 'QueryOrderByKeywords',
    kind: 'class',
    interfaces: []
  };
  function QueryPro() {
  }
  QueryPro.$metadata$ = {
    simpleName: 'QueryPro',
    kind: 'interface',
    interfaces: []
  };
  function QueryProImpl(queryStructure) {
    this._queryStructure_5 = queryStructure;
  }
  QueryProImpl.prototype.selectBy_1 = function () {
    var tmp = this._get_createWhereField__2();
    return tmp(this._queryStructure_5.copy$default('SELECT', null, null, null, null, null, 62, null));
  };
  QueryProImpl.prototype.selectOneBy_1 = function () {
    var tmp = this._get_createWhereField__2();
    return tmp(this._queryStructure_5.copy$default('SELECT', null, null, null, null, 1, 30, null));
  };
  QueryProImpl.prototype.orderBy_4 = function () {
    var tmp = this._get_createOrderByField__2();
    return tmp(this._queryStructure_5.copy$default('SELECT', null, null, null, null, null, 62, null));
  };
  QueryProImpl.prototype.updateBy_1 = function () {
    var tmp = this._get_createWhereField__2();
    return tmp(this._queryStructure_5.copy$default('SELECT', null, null, null, null, null, 62, null));
  };
  QueryProImpl.prototype.deleteBy_1 = function () {
    var tmp = this._get_createWhereField__2();
    return tmp(this._queryStructure_5.copy$default('SELECT', null, null, null, null, null, 62, null));
  };
  QueryProImpl.prototype.leftJoinOn_1 = function (fields1, fields2) {
    var oldFrom = this._queryStructure_5._from;
    var oldJoins = oldFrom._joins;
    var currentTableName = this._queryStructure_5._from._main;
    var field1TableName = fields1._getTableName();
    var field2TableName = fields2._getTableName();
    var foreignTableName = null;
    var foreignFields = null;
    var currentTableFields = null;
    if (field1TableName === currentTableName) {
      foreignTableName = field2TableName;
      foreignFields = fields2._getFields();
      currentTableFields = fields1._getFields();
    } else if (field2TableName === currentTableName) {
      foreignTableName = field1TableName;
      foreignFields = fields1._getFields();
      currentTableFields = fields2._getFields();
    } else {
      var indexedObject = oldJoins;
      var inductionVariable = 0;
      var last = indexedObject.length;
      $l$break_0: while (inductionVariable < last) {
        var oldJoin = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (oldJoin._table_0 === field1TableName) {
          foreignTableName = field2TableName;
          foreignFields = fields2._getFields();
          currentTableFields = fields1._getFields();
          break $l$break_0;
        }if (oldJoin._table_0 === field2TableName) {
          foreignTableName = field1TableName;
          foreignFields = fields1._getFields();
          currentTableFields = fields2._getFields();
          break $l$break_0;
        }}
    }
    if ((foreignFields == null ? true : currentTableFields == null) ? true : foreignTableName == null) {
      throw RuntimeException_init_$Create$('' + 'can not find left table for joiner1 and joiner2: ' + field1TableName + ', ' + field2TableName);
    }if (!(foreignFields.length === currentTableFields.length)) {
      throw RuntimeException_init_$Create$('' + 'the joiner length of ' + currentTableFields + ' and ' + foreignFields + ' is not equal');
    }var tmp0_mapIndexed_0 = foreignFields;
    var tmp0_mapIndexedTo_0_1 = ArrayList_init_$Create$(tmp0_mapIndexed_0.length);
    var index_1_2 = 0;
    var tmp0_iterator_2_3 = arrayIterator(tmp0_mapIndexed_0);
    while (tmp0_iterator_2_3.hasNext_1()) {
      var item_3_4 = tmp0_iterator_2_3.next_1();
      var tmp1_4_5 = index_1_2;
      index_1_2 = tmp1_4_5 + 1 | 0;
      var tmp1__anonymous__6 = tmp1_4_5;
      tmp0_mapIndexedTo_0_1.add_4(new FromJoinerOn(currentTableFields[tmp1__anonymous__6], item_3_4));
      Unit_getInstance();
    }
    var foreignJoinerOn = tmp0_mapIndexedTo_0_1;
    var tmp = foreignTableName;
    var tmp2_plus_0 = new FromJoiner(tmp, copyToArray_0(foreignJoinerOn));
    var tmp0_arrayOf_0_1 = [tmp2_plus_0];
    var newJoins = oldJoins.concat(tmp0_arrayOf_0_1);
    var tmp_0 = this._get_createQuery__0();
    var tmp_1 = oldFrom.copy$default_5(null, newJoins, 1, null);
    return tmp_0(this._queryStructure_5.copy$default(null, null, tmp_1, null, null, null, 59, null));
  };
  QueryProImpl.prototype.joiner_1 = function () {
    return this._get_fieldGenerator__3()();
  };
  QueryProImpl.prototype.foreignField_1 = function () {
    return this._get_createWhereField__2()(this._queryStructure_5);
  };
  QueryProImpl.$metadata$ = {
    simpleName: 'QueryProImpl',
    kind: 'class',
    interfaces: [QueryPro]
  };
  function QueryStructure_init_$Init$(action, fields, from, where, orderBy, limit, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      action = 'SELECT';
    if (!(($mask0 & 2) === 0)) {
      var tmp0_arrayOf_0 = [];
      fields = tmp0_arrayOf_0;
    }if (!(($mask0 & 4) === 0)) {
      var tmp0_arrayOf_0_0 = [];
      from = new QueryStructureFrom('', tmp0_arrayOf_0_0);
    }if (!(($mask0 & 8) === 0)) {
      var tmp0_arrayOf_0_1 = [];
      where = tmp0_arrayOf_0_1;
    }if (!(($mask0 & 16) === 0)) {
      var tmp0_arrayOf_0_2 = [];
      orderBy = tmp0_arrayOf_0_2;
    }if (!(($mask0 & 32) === 0))
      limit = null;
    QueryStructure.call($this, action, fields, from, where, orderBy, limit);
    return $this;
  }
  function QueryStructure_init_$Create$(action, fields, from, where, orderBy, limit, $mask0, $marker) {
    return QueryStructure_init_$Init$(action, fields, from, where, orderBy, limit, $mask0, $marker, Object.create(QueryStructure.prototype));
  }
  function QueryStructure(action, fields, from, where, orderBy, limit) {
    this._action = action;
    this._fields = fields;
    this._from = from;
    this._where = where;
    this._orderBy = orderBy;
    this._limit = limit;
  }
  QueryStructure.prototype._get_action_ = function () {
    return this._action;
  };
  QueryStructure.prototype._get_fields_ = function () {
    return this._fields;
  };
  QueryStructure.prototype._get_from_ = function () {
    return this._from;
  };
  QueryStructure.prototype._get_where_ = function () {
    return this._where;
  };
  QueryStructure.prototype._get_orderBy_ = function () {
    return this._orderBy;
  };
  QueryStructure.prototype._get_limit_ = function () {
    return this._limit;
  };
  QueryStructure.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression_0(this).equals(getKClassFromExpression_0(other)))
      return false;
    if (other instanceof QueryStructure)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!(this._action === other._action))
      return false;
    if (!contentEquals(this._fields, other._fields))
      return false;
    if (!this._from.equals(other._from))
      return false;
    if (!contentEquals(this._where, other._where))
      return false;
    if (!contentEquals(this._orderBy, other._orderBy))
      return false;
    if (!(this._limit == other._limit))
      return false;
    return true;
  };
  QueryStructure.prototype.hashCode = function () {
    var result = getStringHashCode(this._action);
    result = imul(31, result) + contentHashCode(this._fields) | 0;
    result = imul(31, result) + this._from.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this._where) | 0;
    result = imul(31, result) + contentHashCode(this._orderBy) | 0;
    var tmp = imul(31, result);
    var tmp0_elvis_lhs = this._limit;
    result = tmp + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
    return result;
  };
  QueryStructure.prototype.component1_5 = function () {
    return this._action;
  };
  QueryStructure.prototype.component2_5 = function () {
    return this._fields;
  };
  QueryStructure.prototype.component3_0 = function () {
    return this._from;
  };
  QueryStructure.prototype.component4 = function () {
    return this._where;
  };
  QueryStructure.prototype.component5 = function () {
    return this._orderBy;
  };
  QueryStructure.prototype.component6 = function () {
    return this._limit;
  };
  QueryStructure.prototype.copy = function (action, fields, from, where, orderBy, limit) {
    return new QueryStructure(action, fields, from, where, orderBy, limit);
  };
  QueryStructure.prototype.copy$default = function (action, fields, from, where, orderBy, limit, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      action = this._action;
    if (!(($mask0 & 2) === 0))
      fields = this._fields;
    if (!(($mask0 & 4) === 0))
      from = this._from;
    if (!(($mask0 & 8) === 0))
      where = this._where;
    if (!(($mask0 & 16) === 0))
      orderBy = this._orderBy;
    if (!(($mask0 & 32) === 0))
      limit = this._limit;
    return this.copy(action, fields, from, where, orderBy, limit);
  };
  QueryStructure.prototype.toString = function () {
    return '' + 'QueryStructure(action=' + this._action + ', fields=' + toString_0(this._fields) + ', from=' + this._from + ', where=' + toString_0(this._where) + ', orderBy=' + toString_0(this._orderBy) + ', limit=' + this._limit + ')';
  };
  QueryStructure.$metadata$ = {
    simpleName: 'QueryStructure',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(QueryStructure.prototype, 'action', {
    configurable: true,
    get: QueryStructure.prototype._get_action_
  });
  Object.defineProperty(QueryStructure.prototype, 'fields', {
    configurable: true,
    get: QueryStructure.prototype._get_fields_
  });
  Object.defineProperty(QueryStructure.prototype, 'from', {
    configurable: true,
    get: QueryStructure.prototype._get_from_
  });
  Object.defineProperty(QueryStructure.prototype, 'where', {
    configurable: true,
    get: QueryStructure.prototype._get_where_
  });
  Object.defineProperty(QueryStructure.prototype, 'orderBy', {
    configurable: true,
    get: QueryStructure.prototype._get_orderBy_
  });
  Object.defineProperty(QueryStructure.prototype, 'limit', {
    configurable: true,
    get: QueryStructure.prototype._get_limit_
  });
  function OrderByClause(field, operator) {
    this._field_3 = field;
    this._operator = operator;
  }
  OrderByClause.prototype._get_field__0 = function () {
    return this._field_3;
  };
  OrderByClause.prototype._get_operator__0 = function () {
    return this._operator;
  };
  OrderByClause.prototype.component1_5 = function () {
    return this._field_3;
  };
  OrderByClause.prototype.component2_5 = function () {
    return this._operator;
  };
  OrderByClause.prototype.copy_0 = function (field, operator) {
    return new OrderByClause(field, operator);
  };
  OrderByClause.prototype.copy$default_0 = function (field, operator, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      field = this._field_3;
    if (!(($mask0 & 2) === 0))
      operator = this._operator;
    return this.copy_0(field, operator);
  };
  OrderByClause.prototype.toString = function () {
    return '' + 'OrderByClause(field=' + this._field_3 + ', operator=' + this._operator + ')';
  };
  OrderByClause.prototype.hashCode = function () {
    var result = this._field_3.hashCode();
    result = imul(result, 31) + getStringHashCode(this._operator) | 0;
    return result;
  };
  OrderByClause.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderByClause))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof OrderByClause ? other : THROW_CCE();
    if (!this._field_3.equals(tmp0_other_with_cast._field_3))
      return false;
    if (!(this._operator === tmp0_other_with_cast._operator))
      return false;
    return true;
  };
  OrderByClause.$metadata$ = {
    simpleName: 'OrderByClause',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(OrderByClause.prototype, 'field', {
    configurable: true,
    get: OrderByClause.prototype._get_field__0
  });
  Object.defineProperty(OrderByClause.prototype, 'operator', {
    configurable: true,
    get: OrderByClause.prototype._get_operator__0
  });
  function Field_init_$Init$(table, column, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      table = null;
    Field.call($this, table, column);
    return $this;
  }
  function Field_init_$Create$(table, column, $mask0, $marker) {
    return Field_init_$Init$(table, column, $mask0, $marker, Object.create(Field.prototype));
  }
  function Field(table, column) {
    this._table = table;
    this._column = column;
  }
  Field.prototype._get_table__0 = function () {
    return this._table;
  };
  Field.prototype._get_column_ = function () {
    return this._column;
  };
  Field.prototype.component1_5 = function () {
    return this._table;
  };
  Field.prototype.component2_5 = function () {
    return this._column;
  };
  Field.prototype.copy_1 = function (table, column) {
    return new Field(table, column);
  };
  Field.prototype.copy$default_1 = function (table, column, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      table = this._table;
    if (!(($mask0 & 2) === 0))
      column = this._column;
    return this.copy_1(table, column);
  };
  Field.prototype.toString = function () {
    return '' + 'Field(table=' + this._table + ', column=' + this._column + ')';
  };
  Field.prototype.hashCode = function () {
    var result = this._table == null ? 0 : getStringHashCode(this._table);
    result = imul(result, 31) + getStringHashCode(this._column) | 0;
    return result;
  };
  Field.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Field))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Field ? other : THROW_CCE();
    if (!(this._table == tmp0_other_with_cast._table))
      return false;
    if (!(this._column === tmp0_other_with_cast._column))
      return false;
    return true;
  };
  Field.$metadata$ = {
    simpleName: 'Field',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Field.prototype, 'table', {
    configurable: true,
    get: Field.prototype._get_table__0
  });
  Object.defineProperty(Field.prototype, 'column', {
    configurable: true,
    get: Field.prototype._get_column_
  });
  function WhereClause_init_$Init$(field, operator, value, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      field = null;
    if (!(($mask0 & 4) === 0))
      value = null;
    WhereClause.call($this, field, operator, value);
    return $this;
  }
  function WhereClause_init_$Create$(field, operator, value, $mask0, $marker) {
    return WhereClause_init_$Init$(field, operator, value, $mask0, $marker, Object.create(WhereClause.prototype));
  }
  function WhereClause(field, operator, value) {
    this._field_4 = field;
    this._operator_0 = operator;
    this._value = value;
  }
  WhereClause.prototype._get_field__0 = function () {
    return this._field_4;
  };
  WhereClause.prototype._get_operator__0 = function () {
    return this._operator_0;
  };
  WhereClause.prototype._get_value_ = function () {
    return this._value;
  };
  WhereClause.prototype.component1_5 = function () {
    return this._field_4;
  };
  WhereClause.prototype.component2_5 = function () {
    return this._operator_0;
  };
  WhereClause.prototype.component3_0 = function () {
    return this._value;
  };
  WhereClause.prototype.copy_2 = function (field, operator, value) {
    return new WhereClause(field, operator, value);
  };
  WhereClause.prototype.copy$default_2 = function (field, operator, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      field = this._field_4;
    if (!(($mask0 & 2) === 0))
      operator = this._operator_0;
    if (!(($mask0 & 4) === 0))
      value = this._value;
    return this.copy_2(field, operator, value);
  };
  WhereClause.prototype.toString = function () {
    return '' + 'WhereClause(field=' + this._field_4 + ', operator=' + this._operator_0 + ', value=' + this._value + ')';
  };
  WhereClause.prototype.hashCode = function () {
    var result = this._field_4 == null ? 0 : this._field_4.hashCode();
    result = imul(result, 31) + getStringHashCode(this._operator_0) | 0;
    result = imul(result, 31) + (this._value == null ? 0 : hashCode(this._value)) | 0;
    return result;
  };
  WhereClause.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhereClause))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof WhereClause ? other : THROW_CCE();
    if (!equals(this._field_4, tmp0_other_with_cast._field_4))
      return false;
    if (!(this._operator_0 === tmp0_other_with_cast._operator_0))
      return false;
    if (!equals(this._value, tmp0_other_with_cast._value))
      return false;
    return true;
  };
  WhereClause.$metadata$ = {
    simpleName: 'WhereClause',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(WhereClause.prototype, 'field', {
    configurable: true,
    get: WhereClause.prototype._get_field__0
  });
  Object.defineProperty(WhereClause.prototype, 'operator', {
    configurable: true,
    get: WhereClause.prototype._get_operator__0
  });
  Object.defineProperty(WhereClause.prototype, 'value', {
    configurable: true,
    get: WhereClause.prototype._get_value_
  });
  function QueryStructureAction() {
    QueryStructureAction_instance = this;
    this._SELECT = 'SELECT';
    this._UPDATE = 'UPDATE';
    this._DELETE = 'DELETE';
  }
  QueryStructureAction.prototype._get_SELECT_ = function () {
    return this._SELECT;
  };
  QueryStructureAction.prototype._get_UPDATE_ = function () {
    return this._UPDATE;
  };
  QueryStructureAction.prototype._get_DELETE_ = function () {
    return this._DELETE;
  };
  QueryStructureAction.$metadata$ = {
    simpleName: 'QueryStructureAction',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(QueryStructureAction.prototype, 'SELECT', {
    configurable: true,
    get: QueryStructureAction.prototype._get_SELECT_
  });
  Object.defineProperty(QueryStructureAction.prototype, 'UPDATE', {
    configurable: true,
    get: QueryStructureAction.prototype._get_UPDATE_
  });
  Object.defineProperty(QueryStructureAction.prototype, 'DELETE', {
    configurable: true,
    get: QueryStructureAction.prototype._get_DELETE_
  });
  var QueryStructureAction_instance;
  function QueryStructureAction_getInstance() {
    if (QueryStructureAction_instance == null)
      new QueryStructureAction();
    return QueryStructureAction_instance;
  }
  function FromJoinerOn(left, right) {
    this._left = left;
    this._right = right;
  }
  FromJoinerOn.prototype._get_left_ = function () {
    return this._left;
  };
  FromJoinerOn.prototype._get_right_ = function () {
    return this._right;
  };
  FromJoinerOn.prototype.component1_5 = function () {
    return this._left;
  };
  FromJoinerOn.prototype.component2_5 = function () {
    return this._right;
  };
  FromJoinerOn.prototype.copy_3 = function (left, right) {
    return new FromJoinerOn(left, right);
  };
  FromJoinerOn.prototype.copy$default_3 = function (left, right, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      left = this._left;
    if (!(($mask0 & 2) === 0))
      right = this._right;
    return this.copy_3(left, right);
  };
  FromJoinerOn.prototype.toString = function () {
    return '' + 'FromJoinerOn(left=' + this._left + ', right=' + this._right + ')';
  };
  FromJoinerOn.prototype.hashCode = function () {
    var result = this._left.hashCode();
    result = imul(result, 31) + this._right.hashCode() | 0;
    return result;
  };
  FromJoinerOn.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FromJoinerOn))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof FromJoinerOn ? other : THROW_CCE();
    if (!this._left.equals(tmp0_other_with_cast._left))
      return false;
    if (!this._right.equals(tmp0_other_with_cast._right))
      return false;
    return true;
  };
  FromJoinerOn.$metadata$ = {
    simpleName: 'FromJoinerOn',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(FromJoinerOn.prototype, 'left', {
    configurable: true,
    get: FromJoinerOn.prototype._get_left_
  });
  Object.defineProperty(FromJoinerOn.prototype, 'right', {
    configurable: true,
    get: FromJoinerOn.prototype._get_right_
  });
  function FromJoiner(table, on) {
    this._table_0 = table;
    this._on = on;
  }
  FromJoiner.prototype._get_table__0 = function () {
    return this._table_0;
  };
  FromJoiner.prototype._get_on_ = function () {
    return this._on;
  };
  FromJoiner.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression_0(this).equals(getKClassFromExpression_0(other)))
      return false;
    if (other instanceof FromJoiner)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!(this._table_0 === other._table_0))
      return false;
    if (!contentEquals(this._on, other._on))
      return false;
    return true;
  };
  FromJoiner.prototype.hashCode = function () {
    var result = getStringHashCode(this._table_0);
    result = imul(31, result) + contentHashCode(this._on) | 0;
    return result;
  };
  FromJoiner.prototype.component1_5 = function () {
    return this._table_0;
  };
  FromJoiner.prototype.component2_5 = function () {
    return this._on;
  };
  FromJoiner.prototype.copy_4 = function (table, on) {
    return new FromJoiner(table, on);
  };
  FromJoiner.prototype.copy$default_4 = function (table, on, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      table = this._table_0;
    if (!(($mask0 & 2) === 0))
      on = this._on;
    return this.copy_4(table, on);
  };
  FromJoiner.prototype.toString = function () {
    return '' + 'FromJoiner(table=' + this._table_0 + ', on=' + toString_0(this._on) + ')';
  };
  FromJoiner.$metadata$ = {
    simpleName: 'FromJoiner',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(FromJoiner.prototype, 'table', {
    configurable: true,
    get: FromJoiner.prototype._get_table__0
  });
  Object.defineProperty(FromJoiner.prototype, 'on', {
    configurable: true,
    get: FromJoiner.prototype._get_on_
  });
  function QueryStructureFrom_init_$Init$(main_0, joins, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0)) {
      var tmp0_arrayOf_0 = [];
      joins = tmp0_arrayOf_0;
    }QueryStructureFrom.call($this, main_0, joins);
    return $this;
  }
  function QueryStructureFrom_init_$Create$(main_0, joins, $mask0, $marker) {
    return QueryStructureFrom_init_$Init$(main_0, joins, $mask0, $marker, Object.create(QueryStructureFrom.prototype));
  }
  function QueryStructureFrom(main_0, joins) {
    this._main = main_0;
    this._joins = joins;
  }
  QueryStructureFrom.prototype._get_main_ = function () {
    return this._main;
  };
  QueryStructureFrom.prototype._get_joins_ = function () {
    return this._joins;
  };
  QueryStructureFrom.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression_0(this).equals(getKClassFromExpression_0(other)))
      return false;
    if (other instanceof QueryStructureFrom)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!(this._main === other._main))
      return false;
    if (!contentEquals(this._joins, other._joins))
      return false;
    return true;
  };
  QueryStructureFrom.prototype.hashCode = function () {
    var result = getStringHashCode(this._main);
    result = imul(31, result) + contentHashCode(this._joins) | 0;
    return result;
  };
  QueryStructureFrom.prototype.component1_5 = function () {
    return this._main;
  };
  QueryStructureFrom.prototype.component2_5 = function () {
    return this._joins;
  };
  QueryStructureFrom.prototype.copy_5 = function (main_0, joins) {
    return new QueryStructureFrom(main_0, joins);
  };
  QueryStructureFrom.prototype.copy$default_5 = function (main_0, joins, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      main_0 = this._main;
    if (!(($mask0 & 2) === 0))
      joins = this._joins;
    return this.copy_5(main_0, joins);
  };
  QueryStructureFrom.prototype.toString = function () {
    return '' + 'QueryStructureFrom(main=' + this._main + ', joins=' + toString_0(this._joins) + ')';
  };
  QueryStructureFrom.$metadata$ = {
    simpleName: 'QueryStructureFrom',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(QueryStructureFrom.prototype, 'main', {
    configurable: true,
    get: QueryStructureFrom.prototype._get_main_
  });
  Object.defineProperty(QueryStructureFrom.prototype, 'joins', {
    configurable: true,
    get: QueryStructureFrom.prototype._get_joins_
  });
  function QueryFieldJs(queryStructure, type, fieldGenerator, createWhereField, createOrderByField, createColumnLimiterField, createColumnsLimiterField) {
    QueryField.call(this, queryStructure);
    this._type = type;
    this._fieldGenerator = fieldGenerator;
    this._createWhereField = createWhereField;
    this._createOrderByField = createOrderByField;
    this._createColumnLimiterField = createColumnLimiterField;
    this._createColumnsLimiterField = createColumnsLimiterField;
  }
  QueryFieldJs.prototype._get_type__0 = function () {
    return this._type;
  };
  QueryFieldJs.prototype._get_fieldGenerator__3 = function () {
    return this._fieldGenerator;
  };
  QueryFieldJs.prototype._get_createWhereField__2 = function () {
    return this._createWhereField;
  };
  QueryFieldJs.prototype._get_createOrderByField__2 = function () {
    return this._createOrderByField;
  };
  QueryFieldJs.prototype._get_createColumnLimiterField__1 = function () {
    return this._createColumnLimiterField;
  };
  QueryFieldJs.prototype._get_createColumnsLimiterField__1 = function () {
    return this._createColumnsLimiterField;
  };
  QueryFieldJs.$metadata$ = {
    simpleName: 'QueryFieldJs',
    kind: 'class',
    interfaces: []
  };
  function QueryProJs(queryStructure, createQuery, createWhereField, createOrderByField, fieldGenerator) {
    QueryProImpl.call(this, queryStructure);
    this._queryStructure_6 = queryStructure;
    this._createQuery = createQuery;
    this._createWhereField_0 = createWhereField;
    this._createOrderByField_0 = createOrderByField;
    this._fieldGenerator_0 = fieldGenerator;
  }
  QueryProJs.prototype._get_createQuery__0 = function () {
    return this._createQuery;
  };
  QueryProJs.prototype._get_createWhereField__2 = function () {
    return this._createWhereField_0;
  };
  QueryProJs.prototype._get_createOrderByField__2 = function () {
    return this._createOrderByField_0;
  };
  QueryProJs.prototype._get_fieldGenerator__3 = function () {
    return this._fieldGenerator_0;
  };
  QueryProJs.$metadata$ = {
    simpleName: 'QueryProJs',
    kind: 'class',
    interfaces: []
  };
  function access(obj, prop) {
    var jsObj = obj;
    var tmp = jsObj[prop];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function main() {
    (function () {
      var $externalVarargReceiverTmp = console;
      return $externalVarargReceiverTmp.log.apply($externalVarargReceiverTmp, [].concat(['' + 'Hello, ' + greet()]));
    }.call(this));
  }
  function greet() {
    return 'world';
  }
  AbstractMutableList.prototype.get_10 = List.prototype.get_10;
  KClassImpl.prototype._get_simpleName__2 = KClass.prototype._get_simpleName__2;
  functionClasses = functionClasses$init$();
  buf = new ArrayBuffer(8);
  bufFloat64 = bufFloat64$init$();
  bufInt32 = bufInt32$init$();
  lowIndex = lowIndex$init$();
  highIndex = 1 - lowIndex | 0;
  var $cloudself = _.cloudself || (_.cloudself = {});
  var $cloudself$cn = $cloudself.cn || ($cloudself.cn = {});
  var $cloudself$cn$query = $cloudself$cn.query || ($cloudself$cn.query = {});
  $cloudself$cn$query.QueryFieldType = QueryFieldType;
  $cloudself$cn$query.FinalQueryField = FinalQueryField;
  $cloudself$cn$query.QueryField = QueryField;
  $cloudself$cn$query.QueryKeywords = QueryKeywords;
  $cloudself$cn$query.QueryWithNotKeywords = QueryWithNotKeywords;
  $cloudself$cn$query.QueryIgnoreCaseKeywords = QueryIgnoreCaseKeywords;
  $cloudself$cn$query.QueryOrderByKeywords = QueryOrderByKeywords;
  $cloudself$cn$query.QueryProImpl = QueryProImpl;
  $cloudself$cn$query.QueryStructure = QueryStructure;
  $cloudself$cn$query.OrderByClause = OrderByClause;
  $cloudself$cn$query.Field = Field;
  $cloudself$cn$query.WhereClause = WhereClause;
  Object.defineProperty($cloudself$cn$query, 'QueryStructureAction', {
    configurable: true,
    get: QueryStructureAction_getInstance
  });
  $cloudself$cn$query.FromJoinerOn = FromJoinerOn;
  $cloudself$cn$query.FromJoiner = FromJoiner;
  $cloudself$cn$query.QueryStructureFrom = QueryStructureFrom;
  $cloudself$cn.QueryFieldJs = QueryFieldJs;
  $cloudself$cn.QueryProJs = QueryProJs;
  main();
  return _;
}));
