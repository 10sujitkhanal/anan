import React from 'react'

function Base() {
  return (
<div>
<div className="theme-layout">
	
      <div className="responsive-header">
        <div className="mh-head first Sticky">
          <span className="mh-btns-left">
            <a className="" href="#menu"><i className="fa fa-align-justify"></i></a>
          </span>
          <span className="mh-text">
            <a href="newsfeed.html" title=""><img src="images/logo2.png" alt=""/></a>
          </span>
          <span className="mh-btns-right">
            <a className="fa fa-sliders" href="#shoppingbag"></a>
          </span>
        </div>
        <div className="mh-head second">
          <form className="mh-form">
            <input placeholder="search" />
            <a href="#/" className="fa fa-search"></a>
          </form>
        </div>
        <nav id="menu" className="res-menu">
          <ul>
            <li><span>Home</span>
              <ul>
                <li><a href="index-2.html" title="">Home Social</a></li>
                <li><a href="index2.html" title="">Home Social 2</a></li>
                <li><a href="index-company.html" title="">Home Company</a></li>
                <li><a href="landing.html" title="">Login page</a></li>
                <li><a href="logout.html" title="">Logout Page</a></li>
                <li><a href="newsfeed.html" title="">news feed</a></li>
              </ul>
            </li>
            <li><span>Time Line</span>
              <ul>
                <li><a href="time-line.html" title="">timeline</a></li>
                <li><a href="timeline-friends.html" title="">timeline friends</a></li>
                <li><a href="timeline-groups.html" title="">timeline groups</a></li>
                <li><a href="timeline-pages.html" title="">timeline pages</a></li>
                <li><a href="timeline-photos.html" title="">timeline photos</a></li>
                <li><a href="timeline-videos.html" title="">timeline videos</a></li>
                <li><a href="fav-page.html" title="">favourit page</a></li>
                <li><a href="groups.html" title="">groups page</a></li>
                <li><a href="page-likers.html" title="">Likes page</a></li>
                <li><a href="people-nearby.html" title="">people nearby</a></li>
                
                
              </ul>
            </li>
            <li><span>Account Setting</span>
              <ul>
                <li><a href="create-fav-page.html" title="">create fav page</a></li>
                <li><a href="edit-account-setting.html" title="">edit account setting</a></li>
                <li><a href="edit-interest.html" title="">edit-interest</a></li>
                <li><a href="edit-password.html" title="">edit-password</a></li>
                <li><a href="edit-profile-basic.html" title="">edit profile basics</a></li>
                <li><a href="edit-work-eductation.html" title="">edit work educations</a></li>
                <li><a href="messages.html" title="">message box</a></li>
                <li><a href="inbox.html" title="">Inbox</a></li>
                <li><a href="notifications.html" title="">notifications page</a></li>
              </ul>
            </li>
            <li><span>forum</span>
              <ul>
                <li><a href="forum.html" title="">Forum Page</a></li>
                <li><a href="forums-category.html" title="">Fourm Category</a></li>
                <li><a href="forum-open-topic.html" title="">Forum Open Topic</a></li>
                <li><a href="forum-create-topic.html" title="">Forum Create Topic</a></li>
              </ul>
            </li>
            <li><span>Our Shop</span>
              <ul>
                <li><a href="shop.html" title="">Shop Products</a></li>
                <li><a href="shop-masonry.html" title="">Shop Masonry Products</a></li>
                <li><a href="shop-single.html" title="">Shop Detail Page</a></li>
                <li><a href="shop-cart.html" title="">Shop Product Cart</a></li>
                <li><a href="shop-checkout.html" title="">Product Checkout</a></li>
              </ul>
            </li>
            <li><span>Our Blog</span>
              <ul>
                <li><a href="blog-grid-wo-sidebar.html" title="">Our Blog</a></li>
                <li><a href="blog-grid-right-sidebar.html" title="">Blog with R-Sidebar</a></li>
                <li><a href="blog-grid-left-sidebar.html" title="">Blog with L-Sidebar</a></li>
                <li><a href="blog-masonry.html" title="">Blog Masonry Style</a></li>
                <li><a href="blog-list-wo-sidebar.html" title="">Blog List Style</a></li>
                <li><a href="blog-list-right-sidebar.html" title="">Blog List with R-Sidebar</a></li>
                <li><a href="blog-list-left-sidebar.html" title="">Blog List with L-Sidebar</a></li>
                <li><a href="blog-detail.html" title="">Blog Post Detail</a></li>
              </ul>
            </li>
            <li><span>Portfolio</span>
              <ul>
                <li><a href="portfolio-2colm.html" title="">Portfolio 2col</a></li>
                <li><a href="portfolio-3colm.html" title="">Portfolio 3col</a></li>
                <li><a href="portfolio-4colm.html" title="">Portfolio 4col</a></li>
              </ul>
            </li>
            <li><span>Support & Help</span>
              <ul>
                <li><a href="support-and-help.html" title="">Support & Help</a></li>
                <li><a href="support-and-help-detail.html" title="">Support & Help Detail</a></li>
                <li><a href="support-and-help-search-result.html" title="">Support & Help Search Result</a></li>
              </ul>
            </li>
            <li><span>More pages</span>
              <ul>
                <li><a href="careers.html" title="">Careers</a></li>
                <li><a href="career-detail.html" title="">Career Detail</a></li>
                <li><a href="404.html" title="">404 error page</a></li>
                <li><a href="404-2.html" title="">404 Style2</a></li>
                <li><a href="faq.html" title="">faq's page</a></li>
                <li><a href="insights.html" title="">insights</a></li>
                <li><a href="knowledge-base.html" title="">knowledge base</a></li>
              </ul>
            </li>
            <li><a href="about.html" title="">about</a></li>
            <li><a href="about-company.html" title="">About Us2</a></li>
            <li><a href="contact.html" title="">contact</a></li>
            <li><a href="contact-branches.html" title="">Contact Us2</a></li>
            <li><a href="widgets.html" title="">Widgts</a></li>
          </ul>
        </nav>
        <nav id="shoppingbag">
          <div>
            <div className="">
              <form method="post">
                <div className="setting-row">
                  <span>use night mode</span>
                  <input type="checkbox" id="nightmode"/> 
                  <label htmlFor="nightmode" data-on-label="ON" data-off-label="OFF"></label>
                </div>
                <div className="setting-row">
                  <span>Notifications</span>
                  <input type="checkbox" id="switch2"/> 
                  <label htmlFor="switch2" data-on-label="ON" data-off-label="OFF"></label>
                </div>
                <div className="setting-row">
                  <span>Notification sound</span>
                  <input type="checkbox" id="switch3"/> 
                  <label htmlFor="switch3" data-on-label="ON" data-off-label="OFF"></label>
                </div>
                <div className="setting-row">
                  <span>My profile</span>
                  <input type="checkbox" id="switch4"/> 
                  <label htmlFor="switch4" data-on-label="ON" data-off-label="OFF"></label>
                </div>
                <div className="setting-row">
                  <span>Show profile</span>
                  <input type="checkbox" id="switch5"/> 
                  <label htmlFor="switch5" data-on-label="ON" data-off-label="OFF"></label>
                </div>
              </form>
              <h4 className="panel-title">Account Setting</h4>
              <form method="post">
                <div className="setting-row">
                  <span>Sub users</span>
                  <input type="checkbox" id="switch6" /> 
                  <label htmlFor="switch6" data-on-label="ON" data-off-label="OFF"></label>
                </div>
                <div className="setting-row">
                  <span>personal account</span>
                  <input type="checkbox" id="switch7" /> 
                  <label htmlFor="switch7" data-on-label="ON" data-off-label="OFF"></label>
                </div>
                <div className="setting-row">
                  <span>Business account</span>
                  <input type="checkbox" id="switch8" /> 
                  <label htmlFor="switch8" data-on-label="ON" data-off-label="OFF"></label>
                </div>
                <div className="setting-row">
                  <span>Show me online</span>
                  <input type="checkbox" id="switch9" /> 
                  <label htmlFor="switch9" data-on-label="ON" data-off-label="OFF"></label>
                </div>
                <div className="setting-row">
                  <span>Delete history</span>
                  <input type="checkbox" id="switch10" /> 
                  <label htmlFor="switch10" data-on-label="ON" data-off-label="OFF"></label>
                </div>
                <div className="setting-row">
                  <span>Expose author name</span>
                  <input type="checkbox" id="switch11" /> 
                  <label htmlFor="switch11" data-on-label="ON" data-off-label="OFF"></label>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
      
      <div className="topbar stick">
        <div className="logo">
          <a title="" href="newsfeed.html"><img src="images/logo.png" alt=""/></a>
        </div>
        
        <div className="top-area">
          <div className="top-search">
            <form method="post" className="">
              <input type="text" placeholder="Search Friend"/>
              <button data-ripple><i className="ti-search"></i></button>
            </form>
          </div>
          <ul className="setting-area">
            <li><a href="newsfeed.html" title="Home" data-ripple=""><i className="ti-home"></i></a></li>
            <li>
              <a href="#" title="Notification" data-ripple="">
                <i className="ti-bell"></i><span>20</span>
              </a>
              <div className="dropdowns">
                <span>4 New Notifications</span>
                <ul className="drops-menu">
                  <li>
                    <a href="notifications.html" title="">
                      <img src="images/resources/thumb-1.jpg" alt=""/>
                      <div className="mesg-meta">
                        <h6>sarah Loren</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </a>
                    <span className="tag green">New</span>
                  </li>
                  <li>
                    <a href="notifications.html" title="">
                      <img src="images/resources/thumb-2.jpg" alt=""/>
                      <div className="mesg-meta">
                        <h6>Jhon doe</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </a>
                    <span className="tag red">Reply</span>
                  </li>
                  <li>
                    <a href="notifications.html" title="">
                      <img src="images/resources/thumb-3.jpg" alt=""/>
                      <div className="mesg-meta">
                        <h6>Andrew</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </a>
                    <span className="tag blue">Unseen</span>
                  </li>
                  <li>
                    <a href="notifications.html" title="">
                      <img src="images/resources/thumb-4.jpg" alt=""/>
                      <div className="mesg-meta">
                        <h6>Tom cruse</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </a>
                    <span className="tag">New</span>
                  </li>
                  <li>
                    <a href="notifications.html" title="">
                      <img src="images/resources/thumb-5.jpg" alt=""/>
                      <div className="mesg-meta">
                        <h6>Amy</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </a>
                    <span className="tag">New</span>
                  </li>
                </ul>
                <a href="notifications.html" title="" className="more-mesg">view more</a>
              </div>
            </li>
            <li>
              <a href="#" title="Messages" data-ripple=""><i className="ti-comment"></i><span>12</span></a>
              <div className="dropdowns">
                <span>5 New Messages</span>
                <ul className="drops-menu">
                  <li>
                    <a href="notifications.html" title="">
                      <img src="images/resources/thumb-1.jpg" alt=""/>
                      <div className="mesg-meta">
                        <h6>sarah Loren</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </a>
                    <span className="tag green">New</span>
                  </li>
                  <li>
                    <a href="notifications.html" title="">
                      <img src="images/resources/thumb-2.jpg" alt=""/>
                      <div className="mesg-meta">
                        <h6>Jhon doe</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </a>
                    <span className="tag red">Reply</span>
                  </li>
                  <li>
                    <a href="notifications.html" title="">
                      <img src="images/resources/thumb-3.jpg" alt=""/>
                      <div className="mesg-meta">
                        <h6>Andrew</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </a>
                    <span className="tag blue">Unseen</span>
                  </li>
                  <li>
                    <a href="notifications.html" title="">
                      <img src="images/resources/thumb-4.jpg" alt=""/>
                      <div className="mesg-meta">
                        <h6>Tom cruse</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </a>
                    <span className="tag">New</span>
                  </li>
                  <li>
                    <a href="notifications.html" title="">
                      <img src="images/resources/thumb-5.jpg" alt=""/>
                      <div className="mesg-meta">
                        <h6>Amy</h6>
                        <span>Hi, how r u dear ...?</span>
                        <i>2 min ago</i>
                      </div>
                    </a>
                    <span className="tag">New</span>
                  </li>
                </ul>
                <a href="messages.html" title="" className="more-mesg">view more</a>
              </div>
            </li>
            <li><a href="#" title="Languages" data-ripple=""><i className="fa fa-globe"></i></a>
              <div className="dropdowns languages">
                <a href="#" title=""><i className="ti-check"></i>English</a>
                <a href="#" title="">Arabic</a>
                <a href="#" title="">Dutch</a>
                <a href="#" title="">French</a>
              </div>
            </li>
          </ul>
          <div className="user-img">
            <img src="images/resources/admin.jpg" alt=""/>
            <span className="status f-online"></span>
            <div className="user-setting">
              <a href="#" title=""><span className="status f-online"></span>online</a>
              <a href="#" title=""><span className="status f-away"></span>away</a>
              <a href="#" title=""><span className="status f-off"></span>offline</a>
              <a href="#" title=""><i className="ti-user"></i> view profile</a>
              <a href="#" title=""><i className="ti-pencil-alt"></i>edit profile</a>
              <a href="#" title=""><i className="ti-target"></i>activity log</a>
              <a href="#" title=""><i className="ti-settings"></i>account setting</a>
              <a href="#" title=""><i className="ti-power-off"></i>log out</a>
            </div>
          </div>
          <span className="ti-menu main-menu" data-ripple=""></span>
        </div>
      </div>
      
      
      <div className="fixed-sidebar right">
        <div className="chat-friendz">
          <ul className="chat-users">
            <li>
              <div className="author-thmb">
                <img src="images/resources/side-friend1.jpg" alt=""/>
                <span className="status f-online"></span>
              </div>
            </li>
            <li>
              <div className="author-thmb">
                <img src="images/resources/side-friend2.jpg" alt=""/>
                <span className="status f-away"></span>
              </div>
            </li>
            <li>
              <div className="author-thmb">
                <img src="images/resources/side-friend3.jpg" alt=""/>
                <span className="status f-online"></span>
              </div>
            </li>
            <li>
              <div className="author-thmb">
                <img src="images/resources/side-friend4.jpg" alt=""/>
                <span className="status f-offline"></span>
              </div>
            </li>
            <li>
              <div className="author-thmb">
                <img src="images/resources/side-friend5.jpg" alt=""/>
                <span className="status f-online"></span>
              </div>
            </li>
            <li>
              <div className="author-thmb">
                <img src="images/resources/side-friend6.jpg" alt=""/>
                <span className="status f-online"></span>
              </div>
            </li>
            <li>
              <div className="author-thmb">
                <img src="images/resources/side-friend7.jpg" alt=""/>
                <span className="status f-offline"></span>
              </div>
            </li>
            <li>
              <div className="author-thmb">
                <img src="images/resources/side-friend8.jpg" alt=""/>
                <span className="status f-online"></span>
              </div>
            </li>
            <li>
              <div className="author-thmb">
                <img src="images/resources/side-friend9.jpg" alt=""/>
                <span className="status f-away"></span>
              </div>
            </li>
            <li>
              <div className="author-thmb">
                <img src="images/resources/side-friend10.jpg" alt=""/>
                <span className="status f-away"></span>
              </div>
            </li>
            <li>
              <div className="author-thmb">
                <img src="images/resources/side-friend8.jpg" alt=""/>
                <span className="status f-online"></span>
              </div>
            </li>
          </ul>
          <div className="chat-box">
            <div className="chat-head">
              <span className="status f-online"></span>
              <h6>Bucky Barnes</h6>
              <div className="more">
                <span className="more-optns"><i className="ti-more-alt"></i>
                  <ul>
                    <li>block chat</li>
                    <li>unblock chat</li>
                    <li>conversation</li>
                  </ul>
                </span>
                <span className="close-mesage"><i className="ti-close"></i></span>
              </div>
            </div>
            <div className="chat-list">
              <ul>
                <li className="me">
                  <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt=""/></div>
                  <div className="notification-event">
                    <span className="chat-message-item">
                      Hi James! Please remember to buy the food for tomorrow! I???m gonna be handling the gifts and Jake???s gonna get the drinks
                    </span>
                    <span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time></span>
                  </div>
                </li>
                <li className="you">
                  <div className="chat-thumb"><img src="images/resources/chatlist2.jpg" alt=""/></div>
                  <div className="notification-event">
                    <span className="chat-message-item">
                      Hi James! Please remember to buy the food for tomorrow! I???m gonna be handling the gifts and Jake???s gonna get the drinks
                    </span>
                    <span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time></span>
                  </div>
                </li>
                <li className="me">
                  <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt=""/></div>
                  <div className="notification-event">
                    <span className="chat-message-item">
                      Hi James! Please remember to buy the food for tomorrow! I???m gonna be handling the gifts and Jake???s gonna get the drinks
                    </span>
                    <span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time></span>
                  </div>
                </li>
              </ul>
              <form className="text-box">
                <textarea placeholder="Post enter to post..."></textarea>
                <div className="add-smiles">
                  <span title="add icon" className="em em-expressionless"></span>
                </div>
                <div className="smiles-bunch">
                  <i className="em em---1"></i>
                  <i className="em em-smiley"></i>
                  <i className="em em-anguished"></i>
                  <i className="em em-laughing"></i>
                  <i className="em em-angry"></i>
                  <i className="em em-astonished"></i>
                  <i className="em em-blush"></i>
                  <i className="em em-disappointed"></i>
                  <i className="em em-worried"></i>
                  <i className="em em-kissing_heart"></i>
                  <i className="em em-rage"></i>
                  <i className="em em-stuck_out_tongue"></i>
                </div>
                <button type="submit"></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed-sidebar left">
        <div className="menu-left">
          <ul className="left-menu">
            <li><a href="newsfeed.html" title="Newsfeed Page" data-toggle="tooltip" data-placement="right"><i className="ti-magnet"></i></a></li>
            <li><a href="fav-page.html" title="favourit page" data-toggle="tooltip" data-placement="right"><i className="fa fa-star-o"></i></a></li>
            <li><a href="insights.html" title="Account Stats" data-toggle="tooltip" data-placement="right"><i className="ti-stats-up"></i></a></li>
            <li><a href="inbox.html" title="inbox" data-toggle="tooltip" data-placement="right"><i className="ti-import"></i></a></li>
            <li><a href="messages.html" title="Messages" data-toggle="tooltip" data-placement="right"><i className="ti-comment-alt"></i></a></li>
            <li><a href="edit-account-setting.html" title="Setting" data-toggle="tooltip" data-placement="right"><i className="ti-panel"></i></a></li>
            <li><a href="faq.html" title="Faq's" data-toggle="tooltip" data-placement="right"><i className="ti-light-bulb"></i></a></li>
            <li><a href="timeline-friends.html" title="Friends" data-toggle="tooltip" data-placement="right"><i className="ti-themify-favicon"></i></a></li>
            <li><a href="widgets.html" title="Widgets" data-toggle="tooltip" data-placement="right"><i className="ti-eraser"></i></a></li>
            <li><a href="notifications.html" title="Notification" data-toggle="tooltip" data-placement="right"><i className="ti-bookmark-alt"></i></a></li>
          </ul>
        </div>
      </div>
        
      <section>
        <div className="gap2 gray-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="row merged20" id="page-contents">
                  <div className="col-lg-3">
                    <aside className="sidebar static left">
                      <div className="widget">
                        <h4 className="widget-title">Shortcuts</h4>
                        <ul className="naves">
                          <li>
                            <i className="ti-clipboard"></i>
                            <a href="newsfeed.html" title="">News feed</a>
                          </li>
                          <li>
                            <i className="ti-mouse-alt"></i>
                            <a href="inbox.html" title="">Inbox</a>
                          </li>
                          <li>
                            <i className="ti-files"></i>
                            <a href="fav-page.html" title="">My pages</a>
                          </li>
                          <li>
                            <i className="ti-user"></i>
                            <a href="timeline-friends.html" title="">friends</a>
                          </li>
                          <li>
                            <i className="ti-image"></i>
                            <a href="timeline-photos.html" title="">images</a>
                          </li>
                          <li>
                            <i className="ti-video-camera"></i>
                            <a href="timeline-videos.html" title="">videos</a>
                          </li>
                          <li>
                            <i className="ti-comments-smiley"></i>
                            <a href="messages.html" title="">Messages</a>
                          </li>
                          <li>
                            <i className="ti-bell"></i>
                            <a href="notifications.html" title="">Notifications</a>
                          </li>
                          <li>
                            <i className="ti-share"></i>
                            <a href="people-nearby.html" title="">People Nearby</a>
                          </li>
                          <li>
                            <i className="fa fa-bar-chart-o"></i>
                            <a href="insights.html" title="">insights</a>
                          </li>
                          <li>
                            <i className="ti-power-off"></i>
                            <a href="landing.html" title="">Logout</a>
                          </li>
                        </ul>
                      </div>
                      <div className="widget">
                        <h4 className="widget-title">Recent Activity</h4>
                        <ul className="activitiez">
                          <li>
                            <div className="activity-meta">
                              <i>10 hours Ago</i>
                              <span><a href="#" title="">Commented on Video posted </a></span>
                              <h6>by <a href="time-line.html">black demon.</a></h6>
                            </div>
                          </li>
                          <li>
                            <div className="activity-meta">
                              <i>30 Days Ago</i>
                              <span><a href="#" title="">Posted your status. ???Hello guys, how are you????</a></span>
                            </div>
                          </li>
                          <li>
                            <div className="activity-meta">
                              <i>2 Years Ago</i>
                              <span><a href="#" title="">Share a video on her timeline.</a></span>
                              <h6>"<a href="#">you are so funny mr.been.</a>"</h6>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="widget stick-widget">
                        <h4 className="widget-title">Who's follownig</h4>
                        <ul className="followers">
                          <li>
                            <figure><img src="images/resources/friend-avatar2.jpg" alt=""/></figure>
                            <div className="friend-meta">
                              <h4><a href="time-line.html" title="">Kelly Bill</a></h4>
                              <a href="#" title="" className="underline">Add Friend</a>
                            </div>
                          </li>
                          <li>
                            <figure><img src="images/resources/friend-avatar4.jpg" alt=""/></figure>
                            <div className="friend-meta">
                              <h4><a href="time-line.html" title="">Issabel</a></h4>
                              <a href="#" title="" className="underline">Add Friend</a>
                            </div>
                          </li>
                          <li>
                            <figure><img src="images/resources/friend-avatar6.jpg" alt=""/></figure>
                            <div className="friend-meta">
                              <h4><a href="time-line.html" title="">Andrew</a></h4>
                              <a href="#" title="" className="underline">Add Friend</a>
                            </div>
                          </li>
                          <li>
                            <figure><img src="images/resources/friend-avatar8.jpg" alt=""/></figure>
                            <div className="friend-meta">
                              <h4><a href="time-line.html" title="">Sophia</a></h4>
                              <a href="#" title="" className="underline">Add Friend</a>
                            </div>
                          </li>
                          <li>
                            <figure><img src="images/resources/friend-avatar3.jpg" alt=""/></figure>
                            <div className="friend-meta">
                              <h4><a href="time-line.html" title="">Allen</a></h4>
                              <a href="#" title="" className="underline">Add Friend</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                  <div className="col-lg-6">
                    <div className="central-meta">
                      <div className="new-postbox">
                        <figure>
                          <img src="images/resources/admin2.jpg" alt=""/>
                        </figure>
                        <div className="newpst-input">
                          <form method="post">
                            <textarea rows="2" placeholder="write something"></textarea>
                            <div className="attachments">
                              <ul>
                                <li>
                                  <i className="fa fa-music"></i>
                                  <label className="fileContainer">
                                    <input type="file"/>
                                  </label>
                                </li>
                                <li>
                                  <i className="fa fa-image"></i>
                                  <label className="fileContainer">
                                    <input type="file"/>
                                  </label>
                                </li>
                                <li>
                                  <i className="fa fa-video-camera"></i>
                                  <label className="fileContainer">
                                    <input type="file"/>
                                  </label>
                                </li>
                                <li>
                                  <i className="fa fa-camera"></i>
                                  <label className="fileContainer">
                                    <input type="file"/>
                                  </label>
                                </li>
                                <li>
                                  <button type="submit">Post</button>
                                </li>
                              </ul>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="loadMore">
                    <div className="central-meta item">
                      <div className="user-post">
                        <div className="friend-info">
                          <figure>
                            <img src="images/resources/friend-avatar10.jpg" alt=""/>
                          </figure>
                          <div className="friend-name">
                            <ins><a href="time-line.html" title="">Janice Griffith</a></ins>
                            <span>published: june,2 2018 19:PM</span>
                          </div>
                          <div className="post-meta">
                            <img src="images/resources/user-post.jpg" alt=""/>
                            <div className="we-video-info">
                              <ul>
                                <li>
                                  <span className="views" data-toggle="tooltip" title="views">
                                    <i className="fa fa-eye"></i>
                                    <ins>1.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <span className="comment" data-toggle="tooltip" title="Comments">
                                    <i className="fa fa-comments-o"></i>
                                    <ins>52</ins>
                                  </span>
                                </li>
                                <li>
                                  <span className="like" data-toggle="tooltip" title="like">
                                    <i className="ti-heart"></i>
                                    <ins>2.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <span className="dislike" data-toggle="tooltip" title="dislike">
                                    <i className="ti-heart-broken"></i>
                                    <ins>200</ins>
                                  </span>
                                </li>
                                <li className="social-media">
                                  <div className="menu">
                                    <div className="btn trigger"><i className="fa fa-share-alt"></i></div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-html5"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-facebook"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-google-plus"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-twitter"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-css3"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-instagram"></i></a>
                                    </div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-dribbble"></i></a>
                                    </div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    </div>
    
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="description">
                              
                              <p>
                                World's most beautiful car in Curabitur <a href="#" title="">#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="coment-area">
                          <ul className="we-comet">
                            <li>
                              <div className="comet-avatar">
                                <img src="images/resources/comet-1.jpg" alt=""/>
                              </div>
                              <div className="we-comment">
                                <div className="coment-head">
                                  <h5><a href="time-line.html" title="">Jason borne</a></h5>
                                  <span>1 year ago</span>
                                  <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                </div>
                                <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                              </div>
                              <ul>
                                <li>
                                  <div className="comet-avatar">
                                    <img src="images/resources/comet-2.jpg" alt=""/>
                                  </div>
                                  <div className="we-comment">
                                    <div className="coment-head">
                                      <h5><a href="time-line.html" title="">alexendra dadrio</a></h5>
                                      <span>1 month ago</span>
                                      <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                    </div>
                                    <p>yes, really very awesome car i see the features of this car in the official website of <a href="#" title="">#Mercedes-Benz</a> and really impressed :-)</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="comet-avatar">
                                    <img src="images/resources/comet-3.jpg" alt=""/>
                                  </div>
                                  <div className="we-comment">
                                    <div className="coment-head">
                                      <h5><a href="time-line.html" title="">Olivia</a></h5>
                                      <span>16 days ago</span>
                                      <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                    </div>
                                    <p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="comet-avatar">
                                <img src="images/resources/comet-1.jpg" alt=""/>
                              </div>
                              <div className="we-comment">
                                <div className="coment-head">
                                  <h5><a href="time-line.html" title="">Donald Trump</a></h5>
                                  <span>1 week ago</span>
                                  <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                </div>
                                <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel
                                  <i className="em em-smiley"></i>
                                </p>
                              </div>
                            </li>
                            <li>
                              <a href="#" title="" className="showmore underline">more comments</a>
                            </li>
                            <li className="post-comment">
                              <div className="comet-avatar">
                                <img src="images/resources/comet-1.jpg" alt=""/>
                              </div>
                              <div className="post-comt-box">
                                <form method="post">
                                  <textarea placeholder="Post your comment"></textarea>
                                  <div className="add-smiles">
                                    <span className="em em-expressionless" title="add icon"></span>
                                  </div>
                                  <div className="smiles-bunch">
                                    <i className="em em---1"></i>
                                    <i className="em em-smiley"></i>
                                    <i className="em em-anguished"></i>
                                    <i className="em em-laughing"></i>
                                    <i className="em em-angry"></i>
                                    <i className="em em-astonished"></i>
                                    <i className="em em-blush"></i>
                                    <i className="em em-disappointed"></i>
                                    <i className="em em-worried"></i>
                                    <i className="em em-kissing_heart"></i>
                                    <i className="em em-rage"></i>
                                    <i className="em em-stuck_out_tongue"></i>
                                  </div>
                                  <button type="submit"></button>
                                </form>	
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="central-meta item">
                      <div className="user-post">
                        <div className="friend-info">
                          <figure>
                            <img src="images/resources/nearly1.jpg" alt=""/>
                          </figure>
                          <div className="friend-name">
                            <ins><a href="time-line.html" title="">Sara Grey</a></ins>
                            <span>published: june,2 2018 19:PM</span>
                          </div>
                          <div className="post-meta">
                            <iframe width="" height="315" src="https://www.youtube.com/embed/5JJ_jqqpTMY" allow="autoplay;" allowFullScreen></iframe>
                            <div className="we-video-info">
                              <ul>
                                <li>
                                  <span className="views" data-toggle="tooltip" title="views">
                                    <i className="fa fa-eye"></i>
                                    <ins>1.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <span className="comment" data-toggle="tooltip" title="Comments">
                                    <i className="fa fa-comments-o"></i>
                                    <ins>52</ins>
                                  </span>
                                </li>
                                <li>
                                  <span className="like" data-toggle="tooltip" title="like">
                                    <i className="ti-heart"></i>
                                    <ins>2.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <span className="dislike" data-toggle="tooltip" title="dislike">
                                    <i className="ti-heart-broken"></i>
                                    <ins>200</ins>
                                  </span>
                                </li>
                                <li className="social-media">
                                  <div className="menu">
                                    <div className="btn trigger"><i className="fa fa-share-alt"></i></div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-html5"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-facebook"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-google-plus"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-twitter"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-css3"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-instagram"></i></a>
                                    </div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-dribbble"></i></a>
                                    </div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    </div>
    
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="description">
                              
                              <p>
                                Lonely Cat Enjoying in Summer Curabitur <a href="#" title="">#mypage</a> ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="coment-area">
                          <ul className="we-comet">
                            <li>
                              <div className="comet-avatar">
                                <img src="images/resources/comet-1.jpg" alt=""/>
                              </div>
                              <div className="we-comment">
                                <div className="coment-head">
                                  <h5><a href="time-line.html" title="">Jason borne</a></h5>
                                  <span>1 year ago</span>
                                  <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                </div>
                                <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel</p>
                              </div>
    
                            </li>
                            <li>
                              <div className="comet-avatar">
                                <img src="images/resources/comet-2.jpg" alt=""/>
                              </div>
                              <div className="we-comment">
                                <div className="coment-head">
                                  <h5><a href="time-line.html" title="">Sophia</a></h5>
                                  <span>1 week ago</span>
                                  <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                </div>
                                <p>we are working for the dance and sing songs. this video is very awesome for the youngster.
                                  <i className="em em-smiley"></i>
                                </p>
                              </div>
                            </li>
                            <li>
                              <a href="#" title="" className="showmore underline">more comments</a>
                            </li>
                            <li className="post-comment">
                              <div className="comet-avatar">
                                <img src="images/resources/comet-2.jpg" alt=""/>
                              </div>
                              <div className="post-comt-box">
                                <form method="post">
                                  <textarea placeholder="Post your comment"></textarea>
                                  <div className="add-smiles">
                                    <span className="em em-expressionless" title="add icon"></span>
                                  </div>
                                  <div className="smiles-bunch">
                                    <i className="em em---1"></i>
                                    <i className="em em-smiley"></i>
                                    <i className="em em-anguished"></i>
                                    <i className="em em-laughing"></i>
                                    <i className="em em-angry"></i>
                                    <i className="em em-astonished"></i>
                                    <i className="em em-blush"></i>
                                    <i className="em em-disappointed"></i>
                                    <i className="em em-worried"></i>
                                    <i className="em em-kissing_heart"></i>
                                    <i className="em em-rage"></i>
                                    <i className="em em-stuck_out_tongue"></i>
                                  </div>
                                  <button type="submit"></button>
                                </form>	
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="central-meta item">
                      <div className="user-post">
                        <div className="friend-info">
                          <figure>
                            <img src="images/resources/nearly6.jpg" alt=""/>
                          </figure>
                          <div className="friend-name">
                            <ins><a href="time-line.html" title="">Sophia</a></ins>
                            <span>published: january,5 2018 19:PM</span>
                          </div>
                          <div className="post-meta">
                            <div className="post-map">
                              <div className="nearby-map">
                                <div id="map-canvas"></div>
                              </div>
                            </div>
                            <div className="we-video-info">
                              <ul>
                                <li>
                                  <span className="views" data-toggle="tooltip" title="views">
                                    <i className="fa fa-eye"></i>
                                    <ins>1.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <span className="comment" data-toggle="tooltip" title="Comments">
                                    <i className="fa fa-comments-o"></i>
                                    <ins>52</ins>
                                  </span>
                                </li>
                                <li>
                                  <span className="like" data-toggle="tooltip" title="like">
                                    <i className="ti-heart"></i>
                                    <ins>2.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <span className="dislike" data-toggle="tooltip" title="dislike">
                                    <i className="ti-heart-broken"></i>
                                    <ins>200</ins>
                                  </span>
                                </li>
                                <li className="social-media">
                                  <div className="menu">
                                    <div className="btn trigger"><i className="fa fa-share-alt"></i></div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-html5"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-facebook"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-google-plus"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-twitter"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-css3"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-instagram"></i></a>
                                    </div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-dribbble"></i></a>
                                    </div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    </div>
    
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="description">
                              
                              <p>
                                Curabitur Lonely Cat Enjoying in Summer <a href="#" title="">#mypage</a> ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="coment-area">
                          <ul className="we-comet">
                            <li>
                              <div className="comet-avatar">
                                <img src="images/resources/comet-1.jpg" alt=""/>
                              </div>
                              <div className="we-comment">
                                <div className="coment-head">
                                  <h5><a href="time-line.html" title="">Jason borne</a></h5>
                                  <span>1 year ago</span>
                                  <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                </div>
                                <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel</p>
                              </div>
    
                            </li>
                            <li>
                              <div className="comet-avatar">
                                <img src="images/resources/comet-2.jpg" alt=""/>
                              </div>
                              <div className="we-comment">
                                <div className="coment-head">
                                  <h5><a href="time-line.html" title="">Sophia</a></h5>
                                  <span>1 week ago</span>
                                  <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                </div>
                                <p>we are working for the dance and sing songs. this video is very awesome for the youngster.
                                  <i className="em em-smiley"></i>
                                </p>
                              </div>
                            </li>
                            <li>
                              <a href="#" title="" className="showmore underline">more comments</a>
                            </li>
                            <li className="post-comment">
                              <div className="comet-avatar">
                                <img src="images/resources/comet-2.jpg" alt=""/>
                              </div>
                              <div className="post-comt-box">
                                <form method="post">
                                  <textarea placeholder="Post your comment"></textarea>
                                  <div className="add-smiles">
                                    <span className="em em-expressionless" title="add icon"></span>
                                  </div>
                                  <div className="smiles-bunch">
                                    <i className="em em---1"></i>
                                    <i className="em em-smiley"></i>
                                    <i className="em em-anguished"></i>
                                    <i className="em em-laughing"></i>
                                    <i className="em em-angry"></i>
                                    <i className="em em-astonished"></i>
                                    <i className="em em-blush"></i>
                                    <i className="em em-disappointed"></i>
                                    <i className="em em-worried"></i>
                                    <i className="em em-kissing_heart"></i>
                                    <i className="em em-rage"></i>
                                    <i className="em em-stuck_out_tongue"></i>
                                  </div>
                                  <button type="submit"></button>
                                </form>	
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="central-meta item">
                      <div className="user-post">
                        <div className="friend-info">
                          <figure>
                            <img alt="" src="images/resources/friend-avatar10.jpg"/>
                          </figure>
                          <div className="friend-name">
                            <ins><a title="" href="time-line.html">Janice Griffith</a></ins>
                            <span>published: june,2 2018 19:PM</span>
                          </div>
                          <div className="description">
                              
                              <p>
                                Curabitur World's most beautiful car in <a title="" href="#">#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
                              </p>
                            </div>
                          <div className="post-meta">
                            <div className="linked-image align-left">
                              <a title="" href="#"><img alt="" src="images/resources/page1.jpg"/></a>
                            </div>
                            <div className="detail">
                              <span>Love Maid - ChillGroves</span>
                              <p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... </p>
                              <a title="" href="#">www.sample.com</a>
                            </div>		
                            <div className="we-video-info">
                              <ul>
                                <li>
                                  <span className="views" data-toggle="tooltip" title="views">
                                    <i className="fa fa-eye"></i>
                                    <ins>1.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <span className="comment" data-toggle="tooltip" title="Comments">
                                    <i className="fa fa-comments-o"></i>
                                    <ins>52</ins>
                                  </span>
                                </li>
                                <li>
                                  <span className="like" data-toggle="tooltip" title="like">
                                    <i className="ti-heart"></i>
                                    <ins>2.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <span className="dislike" data-toggle="tooltip" title="dislike">
                                    <i className="ti-heart-broken"></i>
                                    <ins>200</ins>
                                  </span>
                                </li>
                                <li className="social-media">
                                  <div className="menu">
                                    <div className="btn trigger"><i className="fa fa-share-alt"></i></div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-html5"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-facebook"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-google-plus"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-twitter"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-css3"></i></a></div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-instagram"></i></a>
                                    </div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-dribbble"></i></a>
                                    </div>
                                    </div>
                                    <div className="rotater">
                                    <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    </div>
    
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <aside className="sidebar static right">
                      <div className="widget">
                        <h4 className="widget-title">Your page</h4>	
                        <div className="your-page">
                          <figure>
                            <a href="#" title=""><img src="images/resources/friend-avatar9.jpg" alt=""/></a>
                          </figure>
                          <div className="page-meta">
                            <a href="#" title="" className="underline">My page</a>
                            <span><i className="ti-comment"></i><a href="insight.html" title="">Messages <em>9</em></a></span>
                            <span><i className="ti-bell"></i><a href="insight.html" title="">Notifications <em>2</em></a></span>
                          </div>
                          <div className="page-likes">
                            <ul className="nav nav-tabs likes-btn">
                              <li className="nav-item"><a className="active" href="#link1" data-toggle="tab">likes</a></li>
                               <li className="nav-item"><a className="" href="#link2" data-toggle="tab">views</a></li>
                            </ul>
                            
                            <div className="tab-content">
                              <div className="tab-pane active fade show " id="link1" >
                              <span><i className="ti-heart"></i>884</span>
                                <a href="#" title="weekly-likes">35 new likes this week</a>
                                <div className="users-thumb-list">
                                <a href="#" title="Anderw" data-toggle="tooltip">
                                  <img src="images/resources/userlist-1.jpg" alt=""/>  
                                </a>
                                <a href="#" title="frank" data-toggle="tooltip">
                                  <img src="images/resources/userlist-2.jpg" alt=""/>  
                                </a>
                                <a href="#" title="Sara" data-toggle="tooltip">
                                  <img src="images/resources/userlist-3.jpg" alt=""/>  
                                </a>
                                <a href="#" title="Amy" data-toggle="tooltip">
                                  <img src="images/resources/userlist-4.jpg" alt=""/>  
                                </a>
                                <a href="#" title="Ema" data-toggle="tooltip">
                                  <img src="images/resources/userlist-5.jpg" alt=""/>  
                                </a>
                                <a href="#" title="Sophie" data-toggle="tooltip">
                                  <img src="images/resources/userlist-6.jpg" alt=""/>  
                                </a>
                                <a href="#" title="Maria" data-toggle="tooltip">
                                  <img src="images/resources/userlist-7.jpg" alt=""/>  
                                </a>  
                                </div>
                              </div>
                              <div className="tab-pane fade" id="link2" >
                                <span><i className="ti-eye"></i>440</span>
                                <a href="#" title="weekly-likes">440 new views this week</a>
                                <div className="users-thumb-list">
                                <a href="#" title="Anderw" data-toggle="tooltip">
                                  <img src="images/resources/userlist-1.jpg" alt=""/>  
                                </a>
                                <a href="#" title="frank" data-toggle="tooltip">
                                  <img src="images/resources/userlist-2.jpg" alt=""/>  
                                </a>
                                <a href="#" title="Sara" data-toggle="tooltip">
                                  <img src="images/resources/userlist-3.jpg" alt=""/>  
                                </a>
                                <a href="#" title="Amy" data-toggle="tooltip">
                                  <img src="images/resources/userlist-4.jpg" alt=""/>  
                                </a>
                                <a href="#" title="Ema" data-toggle="tooltip">
                                  <img src="images/resources/userlist-5.jpg" alt=""/>  
                                </a>
                                <a href="#" title="Sophie" data-toggle="tooltip">
                                  <img src="images/resources/userlist-6.jpg" alt=""/>  
                                </a>
                                <a href="#" title="Maria" data-toggle="tooltip">
                                  <img src="images/resources/userlist-7.jpg" alt=""/>  
                                </a>  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget">
                        <div className="banner medium-opacity bluesh">
                          <div className="bg-image" ></div>
                          {/* style="background-image: url(images/resources/baner-widgetbg.jpg)" */}
                          <div className="baner-top">
                            <span><img alt="" src="images/book-icon.png"/></span>
                            <i className="fa fa-ellipsis-h"></i>
                          </div>
                          <div className="banermeta">
                            <p>
                              create your own favourit page.
                            </p>
                            <span>like them all</span>
                            <a data-ripple="" title="" href="#">start now!</a>
                          </div>
                        </div>											
                      </div>
                      <div className="widget stick-widget">
                        <h4 className="widget-title">Profile intro</h4>
                        <ul className="short-profile">
                          <li>
                            <span>about</span>
                            <p>Hi, i am jhon kates, i am 32 years old and worked as a web developer in microsoft </p>
                          </li>
                          <li>
                            <span>fav tv show</span>
                            <p>Sacred Games, Spartcus Blood, Games of Theron </p>
                          </li>
                          <li>
                            <span>favourit music</span>
                            <p>Justin Biber, Shakira, Nati Natasah</p>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                </div>	
              </div>
            </div>
          </div>
        </div>	
      </section>
    
      <div className="bottombar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span className="copyright"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span>
              <i><img src="images/credit-cards.png" alt=""/></i>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="side-panel">
          <h4 className="panel-title">General Setting</h4>
          <form method="post">
            <div className="setting-row">
              <span>use night mode</span>
              <input type="checkbox" id="nightmode1"/> 
              <label htmlFor="nightmode1" data-on-label="ON" data-off-label="OFF"></label>
            </div>
            <div className="setting-row">
              <span>Notifications</span>
              <input type="checkbox" id="switch22" /> 
              <label htmlFor="switch22" data-on-label="ON" data-off-label="OFF"></label>
            </div>
            <div className="setting-row">
              <span>Notification sound</span>
              <input type="checkbox" id="switch33" /> 
              <label htmlFor="switch33" data-on-label="ON" data-off-label="OFF"></label>
            </div>
            <div className="setting-row">
              <span>My profile</span>
              <input type="checkbox" id="switch44" /> 
              <label htmlFor="switch44" data-on-label="ON" data-off-label="OFF"></label>
            </div>
            <div className="setting-row">
              <span>Show profile</span>
              <input type="checkbox" id="switch55" /> 
              <label htmlFor="switch55" data-on-label="ON" data-off-label="OFF"></label>
            </div>
          </form>
          <h4 className="panel-title">Account Setting</h4>
          <form method="post">
            <div className="setting-row">
              <span>Sub users</span>
              <input type="checkbox" id="switch66" /> 
              <label htmlFor="switch66" data-on-label="ON" data-off-label="OFF"></label>
            </div>
            <div className="setting-row">
              <span>personal account</span>
              <input type="checkbox" id="switch77" /> 
              <label htmlFor="switch77" data-on-label="ON" data-off-label="OFF"></label>
            </div>
            <div className="setting-row">
              <span>Business account</span>
              <input type="checkbox" id="switch88" /> 
              <label htmlFor="switch88" data-on-label="ON" data-off-label="OFF"></label>
            </div>
            <div className="setting-row">
              <span>Show me online</span>
              <input type="checkbox" id="switch99" /> 
              <label htmlFor="switch99" data-on-label="ON" data-off-label="OFF"></label>
            </div>
            <div className="setting-row">
              <span>Delete history</span>
              <input type="checkbox" id="switch101" /> 
              <label htmlFor="switch101" data-on-label="ON" data-off-label="OFF"></label>
            </div>
            <div className="setting-row">
              <span>Expose author name</span>
              <input type="checkbox" id="switch111" /> 
              <label htmlFor="switch111" data-on-label="ON" data-off-label="OFF"></label>
            </div>
          </form>
      </div>	
</div>
  )
}

export default Base