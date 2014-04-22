/*
Title: Theme
Description: Theme's global CSS settings and component styling
Author: Jesse Kade of Sharp Machine Media
*/

<div class="container">
	<h1>Theme</h1>

	<p class="lead">Global CSS settings for Globacom.</p>

	<ol>
		<li><a href="#typography">Typography</a></li>
		<li><a href="#tables">Tables</a></li>
		<li><a href="#forms">Forms</a></li>
		<li><a href="#buttons">Buttons</a></li>
	</ol>

	<hr>

	<h2><a name="typography" id="typography">Typography</a></h2>

	<h3>Headings</h3>

	<h1>h1. Bootstrap heading</h1>
	<h2>h2. Bootstrap heading</h2>
	<h3>h3. Bootstrap heading</h3>
	<h4>h4. Bootstrap heading</h4>
	<h5>h5. Bootstrap heading</h5>
	<h6>h6. Bootstrap heading</h6>

	<h1>h1. Bootstrap heading <small>Secondary text</small></h1>
	<h2>h2. Bootstrap heading <small>Secondary text</small></h2>
	<h3>h3. Bootstrap heading <small>Secondary text</small></h3>
	<h4>h4. Bootstrap heading <small>Secondary text</small></h4>
	<h5>h5. Bootstrap heading <small>Secondary text</small></h5>
	<h6>h6. Bootstrap heading <small>Secondary text</small></h6>

	<h3>Paragraphs</h3>

	<p class="lead">p.lead Senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>

	<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

	<h3>Lists</h3>

	<ol>
		<li>Ordered List.</li>
		<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
		<li>Aliquam tincidunt mauris eu risus.</li>
	</ol>

	<ul>
		<li>Unordered List.</li>
		<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
		<li>Aliquam tincidunt mauris eu risus.</li>
	</ul>

	<h3>Blockquotes</h3>

	<blockquote>
		<p>Blockquote. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>
	</blockquote>
	
	<hr>

	<h2><a name="tables" id="tables">Tables</a></h2>

	<table class="table table-striped table-bordered">
		<thead>
			<tr>
				<th>Option 1</th>
				<th>Option 2</th>
				<th>Option 3</th>
				<th class="font-light">Option 4</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Item 1</td>
				<td>Item 1</td>
				<td>Item 1</td>
				<td>Item 1</td>
			</tr>
			<tr>
				<td>Item 1</td>
				<td>Item 1</td>
				<td>Item 1</td>
				<td>Item 1</td>
			</tr>
			<tr>
				<td>Item 1</td>
				<td>Item 1</td>
				<td>Item 1</td>
				<td>Item 1</td>
			</tr>
		</tbody>
	</table>

	<hr>

	<h2><a name="forms" id="forms">Forms</a></h2>

	<form role="form">
		<div class="form-group">
			<label for="exampleInputEmail1">Email address</label>
			<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">Password</label>
			<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
		</div>
		<div class="form-group">
			<label for="select">Select</label>
			<select class="form-control">
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
			</select>
		</div>
		<div class="form-group">
			<label for="textarea">Text Area</label>
			<textarea class="form-control" rows="3"></textarea>
		</div>
		<div class="form-group">
			<label for="exampleInputFile">File input</label>
			<input type="file" id="exampleInputFile">
			<p class="help-block">Example block-level help text here.</p>
		</div>
		<div class="radio">
			<label>
				<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
				Option one is this and that&mdash;be sure to include why it's great
			</label>
		</div>
		<div class="radio">
			<label>
				<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
				Option two can be something else and selecting it will deselect option one
			</label>
		</div>
		<div class="checkbox">
			<input type="checkbox" id="checkbox-1" />
			<label for="checkbox-1"><span class="sr-only">Checkbox</span></label>
			<div class="checkbox-label">Check Me</div>
		</div>
		<br>
		<button type="submit" class="btn btn-default">Submit</button>
	</form>

	<hr>

	<h2><a name="buttons" id="buttons">Buttons</a></h2>
	
	<h3>Large</h3>
	
	<p>
		<button type="button" class="btn btn-lg btn-default">Default</button>
		<button type="button" class="btn btn-lg btn-primary">Primary</button>
		<button type="button" class="btn btn-lg btn-success">Success</button>
		<button type="button" class="btn btn-lg btn-info">Info</button>
		<button type="button" class="btn btn-lg btn-warning">Warning</button>
		<button type="button" class="btn btn-lg btn-danger">Danger</button>
		<button type="button" class="btn btn-lg btn-link">Link</button>
	</p>

	<h4>With Icons</h4>
	<p>
		<button type="button" class="btn btn-lg btn-default btn-with-icon">
			<div class="btn-label">Cancel</div>
			<div class="btn-icon"><span class="glyphicon glyphicon-ban-circle"></span></div>
		</button>
		<button type="button" class="btn btn-lg btn-primary btn-with-icon">
			<div class="btn-label">Info</div>
			<div class="btn-icon"><span class="glyphicon glyphicon-envelope"></span></div>
		</button>
		<button type="button" class="btn btn-lg btn-info btn-with-icon">
			<div class="btn-label">Info</div>
			<div class="btn-icon"><span class="glyphicon glyphicon-envelope"></span></div>
		</button>
	</p>

	<h3>Defaut</h3>
	<p>
		<button type="button" class="btn btn-default">Default</button>
		<button type="button" class="btn btn-primary">Primary</button>
		<button type="button" class="btn btn-success">Success</button>
		<button type="button" class="btn btn-info">Info</button>
		<button type="button" class="btn btn-warning">Warning</button>
		<button type="button" class="btn btn-danger">Danger</button>
		<button type="button" class="btn btn-link">Link</button>
	</p>
	<h4>With icons</h4>
	<p>

		<button type="button" class="btn btn-primary btn-with-icon">
			<div class="btn-label">Info</div>
			<div class="btn-icon"><span class="glyphicon glyphicon-envelope"></span></div>
		</button>

		<button type="button" class="btn btn-info btn-with-icon">
			<div class="btn-label">Info</div>
			<div class="btn-icon"><span class="glyphicon glyphicon-envelope"></span></div>
		</button>
	</p>

	<h3>Small</h3>
	<p>
		<button type="button" class="btn btn-sm btn-default">Default</button>
		<button type="button" class="btn btn-sm btn-primary">Primary</button>
		<button type="button" class="btn btn-sm btn-success">Success</button>
		<button type="button" class="btn btn-sm btn-info">Info</button>
		<button type="button" class="btn btn-sm btn-warning">Warning</button>
		<button type="button" class="btn btn-sm btn-danger">Danger</button>
		<button type="button" class="btn btn-sm btn-link">Link</button>
	</p>

	<h3>Extra Small</h3>
	<p>
		<button type="button" class="btn btn-xs btn-default">Default</button>
		<button type="button" class="btn btn-xs btn-primary">Primary</button>
		<button type="button" class="btn btn-xs btn-success">Success</button>
		<button type="button" class="btn btn-xs btn-info">Info</button>
		<button type="button" class="btn btn-xs btn-warning">Warning</button>
		<button type="button" class="btn btn-xs btn-danger">Danger</button>
		<button type="button" class="btn btn-xs btn-link">Link</button>
	</p>
	<hr>

	<h1>Components</h1>

	<h2>Collapse</h2>

	<div class="panel-group" id="accordion">
		<div class="panel panel-default">
			<div class="panel-heading">
				<h4 class="panel-title">
					<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
						Collapsible Group Item #1
						<span class="collapse-open pull-right"></span>
						<div class="triangle pull-right"></div>
					</a>
					<!-- <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
						Collapsible Group Item #1
					</a> -->
				</h4>
			</div>
			<div id="collapseOne" class="panel-collapse collapse in">
				
				<div class="panel-body">
					<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, animi.</li>
						<li>Lorem ipsum dolor sit amet.</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h4 class="panel-title">
					<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" class="collapsed">
						Collapsible Group Item #2
						<span class="collapse-open pull-right"></span>
						<div class="triangle pull-right"></div>
					</a>
				</h4>
			</div>
			<div id="collapseTwo" class="panel-collapse collapse">
				<div class="panel-body">
					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
				</div>
			</div>
		</div>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h4 class="panel-title">
					<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" class="collapsed">
						Collapsible Group Item #3
						<span class="collapse-open pull-right"></span>
						<div class="triangle pull-right"></div>
					</a>
				</h4>
			</div>
			<div id="collapseThree" class="panel-collapse collapse">
				<div class="panel-body">
					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
				</div>
			</div>
		</div>
	</div>
	<br>
	<hr>

	<h2>Navs</h2>
	
</div>

<div class="container">
	<h3>Tabs</h3>
</div>

<section class="blue-light tabs">
	<div class="container">
		<ul class="nav nav-tabs">
			<li class="active"><a href="#home" data-toggle="tab">Overview</a></li>
			<li><a href="#profile" data-toggle="tab">Technical Details</a></li>
			<li><a href="#messages" data-toggle="tab">Messages</a></li>
		</ul>
		<!-- Tab panes -->
		<div class="tab-content">
			<div class="tab-pane active" id="home">
				<h4>Ultimate Security: The highest level of telecommunications security in existence. <br><span>(TLS/SIPS, SRTP, VPN & Encryption)</span></h4>
				<p>With ExecutiveShield Ultimate, your phone line is secure with our Ultimate encryption from your device to our Globacom Carrier Grade Softswitch (GCGS) central platform. On top of that, the call audio is protected using our unique audio scrambling technology, giving you the highest level of telecommunications security in the world.  You can feel safe, knowing that no one else is listening, not even government intelligence agencies.</p>
			</div>
			<div class="tab-pane" id="profile">...</div>
			<div class="tab-pane" id="messages">...</div>
		</div>
	</div>
</section>
<div class="container hidden">
	<h4>Tabs Inverse (for use when using two tabs in the same section)</h4>
</div>
<section class="tabs-inverse">
	<div class="container">
		<ul class="nav nav-tabs nav-tabs-inverse">
			<li class="active"><a href="#home2" data-toggle="tab">Overview</a></li>
			<li><a href="#profile2" data-toggle="tab">Technical Details</a></li>
			<li><a href="#messages2" data-toggle="tab">Messages</a></li>
		</ul>
		<!-- Tab panes -->
		<div class="tab-content tab-content-inverse">
			<div class="tab-pane active" id="home2">
				<h4>Ultimate Security: The highest level of telecommunications security in existence. <br><span>(TLS/SIPS, SRTP, VPN & Encryption)</span></h4>
				<p>With ExecutiveShield Ultimate, your phone line is secure with our Ultimate encryption from your device to our Globacom Carrier Grade Softswitch (GCGS) central platform. On top of that, the call audio is protected using our unique audio scrambling technology, giving you the highest level of telecommunications security in the world.  You can feel safe, knowing that no one else is listening, not even government intelligence agencies.</p>
			</div>
			<div class="tab-pane" id="profile2">...</div>
			<div class="tab-pane" id="messages2">...</div>
		</div>
	</div>
</section>

<div class="container">
	<h2>Page Header</h2>
</div>

<div class="page-header text-center">
	<div class="container">
		<h1>Example page header</h1>
	</div>
</div>