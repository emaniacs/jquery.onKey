jQuery-onKey
=======

Very simple jQuery plugin to handling keydown event on an selector.
Support for shift, control, alt and meta key.


Instalation
-----------
Insert script after the jQuery has been loaded.
`<script type="text/javascript" src="jquery.onKey.js"></script>`

Type of Handler
---------------
Type of handling was been used must an object key, and the method will
executed based on name.

For example if **Handler** has a method was name by **enter**,
so whenever the enter key pressed, element that method will be executed.

List of method
--------------
1. **backspace** for **Backspace** key (8).
2. **tab** for **Tab** key (9).
3. **enter** for **Enter** key (13).
4. **shift** for **Shift** key (16).
5. **ctrl** for **Control** key (17).
6. **alt** for **Alternate** key (18).
7. **pause** for **Pause/Break** key (19).
8. **capsLock** for **Caps Lock** key (20).
9. **escape** for **Escape** key (27).
10. **space** for **Space** key (32).
11. **pageUp** for **Page Up** key (33).
12. **pageDown** for **Page Down** key (34).
13. **end** for **End** key (35).
14. **home** for **Home** key (36).
15. **left** for **Left** key (37).
16. **up** for **Up** key (38).
17. **right** for **Right** key (39).
18. **down** for **Down** key (40).
19. **insert** for **Insert** key (45).
20. **delete** for **Delete** key (46).
21. **0** for **0** key (48).
22. **1** for **1** key (49).
23. **2** for **2** key (50).
24. **3** for **3** key (51).
25. **4** for **4** key (52).
26. **5** for **5** key (53).
27. **6** for **6** key (54).
28. **7** for **7** key (55).
29. **8** for **8** key (56).
30. **9** for **9** key (57).
31. **a** for **a** key (65).
32. **b** for **b** key (66).
33. **c** for **c** key (67).
34. **d** for **d** key (68).
35. **e** for **e** key (69).
35. **f** for **f** key (70).
37. **g** for **g** key (71).
38. **h** for **h** key (72).
39. **i** for **i** key (73).
40. **j** for **j** key (74).
41. **k** for **k** key (75).
42. **l** for **l** key (76).
43. **m** for **m** key (77).
44. **n** for **n** key (78).
45. **o** for **o** key (79).
46. **p** for **p** key (80).
47. **q** for **q** key (81).
48. **r** for **r** key (82).
49. **s** for **s** key (83).
50. **t** for **t** key (84).
51. **u** for **u** key (85).
52. **v** for **v** key (86).
53. **w** for **w** key (87).
54. **x** for **x** key (88).
55. **y** for **y** key (89).
56. **z** for **z** key (90).
57. **winkeys** for **Winkeys** key (91).
58. **rightClick** for **Right Click** key (93).
59. **numpad0** for **Numpad 0** key (96).
60. **numpad1** for **Numpad 1** key (97).
61. **numpad2** for **Numpad 2** key (98).
62. **numpad3** for **Numpad 3** key (99).
63. **numpad4** for **Numpad 4** key (100).
64. **numpad5** for **Numpad 5** key (101).
65. **numpad6** for **Numpad 6** key (102).
66. **numpad7** for **Numpad 7** key (103).
67. **numpad8** for **Numpad 8** key (104).
68. **numpad9** for **Numpad 9** key (105).
69. **numpad*** for **Numpad * (Asterisk)** key (106).
70. **numpad+** for **Numpad + (Plus)** key (107).
71. **numpad-** for **Numpad - (Minus)** key (109).
72. **numpad.** for **Numpad . (Dot)** key (110).
73. **numpad/** for **Numpad / (Slash)** key (111).
74. **f1** for **F1** key (112).
75. **f2** for **F2** key (113).
76. **f3** for **F3** key (114).
77. **f4** for **F4** key (115).
78. **f5** for **F5** key (116).
79. **f6** for **F6** key (117).
80. **f7** for **F7** key (118).
81. **f8** for **F8** key (119).
82. **f9** for **F9** key (120).
83. **f10** for **F10** key (121).
84. **f11** for **F11** key (122).
85. **f12** for **F12** key (123).
86. **numLock** for **Num Lock** key (144).
87. **scrollLock** for **Scroll Lock** key (145).
88. **;** for **; (Semicolon)** key (186).
89. **=** for **= (Equals)** key (187).
90. **,** for **, (Comma)** key (188).
91. **-** for **- (Minus)** key (189).
92. **.** for **. (Dot** key (190).
93. **/** for **/ (Slash)** key (191).
94. **`** for **` (Tilde)** key (192).
95. **[** for **[ (Open Bracket]** key (219).
96. **\** for **\ (Backslash)** key (220).
97. **]** for **] (Close Bracket]** key (221).
98. **'** for **' (Single Quote)** key (222).

Usage
-----
Create handling for element. _Handling_ must an object.

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
    
    // add handling for enter and tab key dynamically
    TextHandler['enter'] = function(event) {
        e.preventDefault();
        console.log('You press "enter" key.');
    };
    
    TextHandler.tab = function(event) {
        alert('Now enter key was removed.')
        
        // remove handler for a key.
        // in this scope, "this" variable is a jquery object.
        TextHandler['enter'] = undefined;
    }
    
</script>
