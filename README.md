jQuery-onKey
=======

Very simple jQuery plugin to handling for keydown event on an object.
Support for shift, control, alt and meta key.


Instalation
-----------
Insert script after the jQuery has been loaded.
`<script type="text/javascript" src="jquery.onKey.js"></script>`


Usage
-----
Create handling for element.

`$(selector).onKey(Handler)`

In the Handler function, *this* is jquery object.


Example
-------
```
<script type="text/javascript" src="jquery.onKey.js">
    // handling tag with 
    $('.textarea').onKey({
        'a' : function(e) {
            console.log('You press a.');
        }
    });
</script>
```

Another sample.
```
<script type="text/javascript" src="jquery.onKey.js">
    var TextHandler = {}
    $('input[name="text"]').onKey(TextHandler);
    
    // 
    TextHandler['enter'] = function(e) {
        e.preventDefault();
        console.log('You press "enter" key.');
    }
    
</script>
