var TableSorter = {
  makeSortable: function(table) {
    var _this = this;
    var th = table.tHead,
      i;
    th && (th = th.rows[0]) && (th = th.cells);
    if (th) {
      i = th.length;
    } else {
      return;
    }
    while (--i >= 0)(function(i) {
      var dir = 1;
      th[i].addEventListener('click', function() {
        _this._sort(table, i, (dir = 1 - dir));
      });
    }(i));
  },
  _sort: function(table, col, reverse) {
    var tb = table.tBodies[0],
      tr = Array.prototype.slice.call(tb.rows, 0),
      i;
    reverse = -((+reverse) || -1);
    tr = tr.sort(function(a, b) {
      return reverse * (
        a.cells[col].textContent.trim().localeCompare(
          b.cells[col].textContent.trim()
        )
      );
    });
    for (i = 0; i < tr.length; ++i) {
      tb.appendChild(tr[i]);
    }
  }
};
window.onload = function() {
  TableSorter.makeSortable(document.getElementById("myTable"));
};
