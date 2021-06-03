<template>  
  <article class="row">
    <div class="col-md-2 col-sm-2 hidden-xs">
      <figure class="thumbnail">
        <img class="img-responsive" src="http://www.tangoflooring.ca/wp-content/uploads/2015/07/user-avatar-placeholder.png" />
        <figcaption class="text-center">username</figcaption>
      </figure>
    </div>
    <div class="col-md-10 col-sm-10">
      <div class="panel panel-default arrow left">
        <div class="panel-body">
          <header class="text-left">
            <div class="comment-user"><i class="fa fa-user"></i> That Guy</div>
            <time class="comment-date" datetime="16-12-2014 01:05"><i class="[ glyphicon glyphicon-time ]" /> Apr 9, 2021</time>
          </header>
          <div class="comment-post">
            <br>
            <p>
              {{commentItem.content}}
            </p>
          </div>
          <p class="text-right"><a href="#" class="btn btn-default btn-sm"> reply <i class="[ glyphicon glyphicon-share-alt ]"></i></a></p>
        </div>
      </div>
    </div>
  </article>
    <br/>
    <br/>
    <br/>
    <br/>
</template>
<script>
  export default {
    name: 'Comment',
    props: ["commentItem"]
  }
</script>

<style scoped>
@media (min-width: 768px) {
  .comment-list .arrow:after, .comment-list .arrow:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
  }
  .comment-list .panel.arrow.left:after, .comment-list .panel.arrow.left:before {
    border-left: 0;
  }
  /*****Left Arrow*****/
  /*Outline effect style*/
  .comment-list .panel.arrow.left:before {
    left: 0px;
    top: 30px;
    /*Use boarder color of panel*/
    border-right-color: inherit;
    border-width: 16px;
  }
  /*Background color effect*/
  .comment-list .panel.arrow.left:after {
    left: 1px;
    top: 31px;
    /*Change for different outline color*/
    border-right-color: #FFFFFF;
    border-width: 15px;
  }
  /*****Right Arrow*****/
  /*Outline effect style*/
  .comment-list .panel.arrow.right:before {
    right: -16px;
    top: 30px;
    /*Use boarder color of panel*/
    border-left-color: inherit;
    border-width: 16px;
  }
  /*Background color effect*/
  .comment-list .panel.arrow.right:after {
    right: -14px;
    top: 31px;
    /*Change for different outline color*/
    border-left-color: #FFFFFF;
    border-width: 15px;
  }
}
.comment-user{
  font-size: 18px;
}
</style>
