-----------------------
## Grid system

```html
.l-grid
.l-grid--xs-{n}
.l-grid--sm-{n}
.l-grid--md-{n}
.l-grid--lg-{n}
```

Grid system is using [Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout).

|Numbers of columns|Extra small|Small|Medium|Large|
|-------------|-----------|---------|----------|---------|
|12           | *<576px* | *≥576px*| *≥768px* | *≥992px*|

**Example:**

```vue
  <div class="l-grid l-grid--xs-3">
    <div style="background: #fd6d6d;">1</div>
    <div style="background: #6d98fd;">2</div>
    <div style="background: #6dfd9b;">3</div>
  </div>
```
-----------------------

