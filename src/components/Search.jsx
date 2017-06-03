var Search = (props) => (
  <form onSubmit={ function(event) { event.preventDefault(); props.onNavSubmit(event.target.children[0].children[0].value, -1); }}>
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={ function(event) { props.onNavSubmit(event.target.value, props.step); }}/>
      <button className="btn hidden-sm-down" >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  </form>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
