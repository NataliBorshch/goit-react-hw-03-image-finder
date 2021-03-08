(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1tHui",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__3QI1O"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3a4-X",Modal:"Modal_Modal__2yeOh"}},22:function(e,t,a){e.exports={search_button:"Searchbar_search_button__dwNiy"}},23:function(e,t,a){e.exports={btn_more:"Button_btn_more__3oaCD"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__s1FIT"}},26:function(e,t,a){e.exports={App:"App_App__3ZntX"}},71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),l=a(12),i=a(4),s=a(5),u=a(7),d=a(6),h=a(21),m=a.n(h),p=function(e){var t=e.search,a=void 0===t?"":t,n=e.page,o=void 0===n?1:n;return m.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(o,"&key=").concat("20579832-dcfce4d3159167d27b56de5b7","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data}))},b=a(22),g=a.n(b),j=a(1),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:""},e.handleInput=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.reset()},e.reset=function(){e.setState({query:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{type:"text",placeholder:"Search images and photos",value:this.state.query,onChange:this.handleInput}),Object(j.jsx)("button",{className:g.a.search_button,type:"submit"})]})})}}]),a}(n.Component),y=a(23),O=a.n(y),v=function(e){var t=e.onClick;return Object(j.jsx)("button",{className:O.a.btn_more,onClick:t,children:"Loader More"})},I=a(24),_=a.n(I),x=a(10),w=a.n(x),M=function(e){var t=e.url,a=e.id,n=e.alt,o=e.large;return Object(j.jsx)("li",{id:a,className:w.a.ImageGalleryItem,children:Object(j.jsx)("img",{src:t,alt:n,className:w.a.ImageGalleryItem_image,"data-source":o})})};M.defaultProps={alt:"photo"};var S=M,k=function(e){var t=e.items,a=e.showModal;return Object(j.jsx)("ul",{className:_.a.ImageGallery,onClick:a,children:t.map((function(e){return Object(j.jsx)(S,{url:e.webformatURL,id:e.id,large:e.largeImageURL},e.id)}))})},C=a(11),G=a.n(C),N=document.getElementById("modal-root"),q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleModalKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleModalOverlay=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleModalKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleModalKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(j.jsx)("div",{className:G.a.Overlay,onClick:this.handleModalOverlay,children:Object(j.jsx)("div",{className:G.a.Modal,children:this.props.children})}),N)}}]),a}(n.Component),A=(a(50),a(25)),D=a.n(A),L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)(D.a,{type:"Bars",color:"#646de6",height:80,width:80})}}]),a}(n.Component),E=a(26),B=a.n(E),U=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={page:1,items:[],search:"",loading:!1,totalItems:0,error:null,modalImg:"",showModal:!1},e.onSubmit=function(t){e.setState({page:1,items:[],search:t})},e.fetchItems=function(){var t=e.state,a={search:t.search,page:t.page};e.setState({loading:!0}),p(a).then((function(t){e.setState((function(e){return{page:e.page+1,items:[].concat(Object(l.a)(e.items),Object(l.a)(t.hits)),totalItems:t.totalHits}}))})).catch((function(t){return e.setState({error:t})})).finally(e.finallyLoading)},e.finallyLoading=function(){0===e.state.totalItems&&alert("Sorry, but  your  request  incorrect"),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.setState({loading:!1})},e.openModal=function(t){"IMG"===t.target.nodeName&&e.setState((function(){return{showModal:!0,modalImg:t.target.dataset.source}}))},e.closeModal=function(){e.setState((function(){return{showModal:!1}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.search!==this.state.search&&this.fetchItems()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.items,n=e.totalItems,o=e.showModal,r=e.modalImg,c=a.length>=12&&a.length!==n&&!t;return Object(j.jsxs)("div",{className:B.a.App,children:[Object(j.jsx)(f,{onSubmit:this.onSubmit}),Object(j.jsx)(k,{items:a,showModal:this.openModal}),c&&Object(j.jsx)(v,{onClick:this.fetchItems}),t&&Object(j.jsx)(L,{}),o&&Object(j.jsx)(q,{onClose:this.closeModal,children:Object(j.jsx)("img",{src:r,alt:""})})]})}}]),a}(n.Component);c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.b6f93752.chunk.js.map