/*
Title: Request Info
*/

<div class="page-header request-info-page-header text-center">
	<div class="container">
		<h1>Thank you for your interest in our services</h1>
	</div>
</div>

<section class="request-info">
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<p class="lead">Your interest says that, just like us, you believe that privacy matters. It also says that you like the new, modern way of safe communications.</p>
			</div>
		</div>
		<div id="contact">
			<div class="row">
				<form role="form" method="post" action="contact-form/contact.php" name="contactform" id="contactform">
					<div class="col-xs-12">
						<p>Simply fill out the form below and a person from our sales team will be in touch with you within the next business day.</p>
						<br>
					</div>
					<div class="col-sm-6">
						<div class="form-group">
							<label for="name">Full name</label>
							<input type="text" class="form-control" id="name">
						</div>
						<div class="form-group">
							<label for="company">Company</label>
							<input type="text" class="form-control" id="company">
						</div>
						<div class="form-group">
							<label for="address">Address</label>
							<input type="text" class="form-control" id="address">
						</div>
						<div class="form-group">
							<label for="city">City</label>
							<input type="text" class="form-control" id="city">
						</div>
						<div class="form-group">
							<label for="zip">Zip Code/Postal Code</label>
							<input type="text" class="form-control" id="zip">
						</div>
						<div class="form-group">
							<label for="mobile">Mobile Phone</label>
							<input type="text" class="form-control" id="mobile">
						</div>
						<div class="form-group">
							<label for="landline">Landline</label>
							<input type="text" class="form-control" id="landline">
						</div>
						<div class="form-group">
							<label for="email">Email</label>
							<input type="email" class="form-control" id="email">
						</div>
					</div>
					<div class="col-sm-6">
						<div class="inspiring-photo hidden-xs">
							<img src="themes/bootstrap/img/blue-lake.jpg" class="img-responsive" width="555" alt="blue-lake">
							<div class="inspiring-photo-words text-center belief">
								“Because your <br>connections are <br>crucial”
							</div>
						</div>
						<br class="hidden-xs">
						<label for="interested">Interested in (Check all that apply):</label>
						<div class="checkbox">
							<input type="checkbox" value="ProShield-Single-Line / SIP account" id="option1" unchecked/>
							<label for="option1"><span class="sr-only">Checkbox</span></label>
							<div class="checkbox-label">ProShield-Single-Line / SIP account</div>
						</div>
						<div class="checkbox">
							<input type="checkbox" value="ProShield-Multi-Line / VirtualPBX" id="option2" />
							<label for="option2"><span class="sr-only">Checkbox</span></label>
							<div class="checkbox-label">ProShield-Multi-Line / VirtualPBX</div>
						</div>
						<div class="checkbox">
							<input type="checkbox" value="ExecutiveShield Multi-Line / VirtualPBX" id="option3" />
							<label for="option3"><span class="sr-only">Checkbox</span></label>
							<div class="checkbox-label">ExecutiveShield Multi-Line / VirtualPBX</div>
						</div>
						<a href="request-info" class="btn btn-lg btn-default btn-with-icon hidden">
							<div class="btn-label">Cancel</div>
							<div class="btn-icon"><span class="glyphicon glyphicon-ban-circle"></span></div>
						</a>
						<button type="submit" class="btn btn-lg btn-primary btn-with-icon" id="submit">
							<div class="btn-label">Submit</div>
							<div class="btn-icon"><span class="icon icon-hand-touch-3"></span></div>
						</button>
						<!-- <input type="submit" class="submit" id="submit" value="Submit" /> -->
					</div>
				</form>
				<div class="col-xs-12">
					<div id="message"></div>
				</div>
			</div>
		</div><!-- END: #contact -->
	</div>
</section><!-- END: .request-info -->


<!-- <div id="contact">
	<h1><abbr title="Asynchronous Javascript and XML">AJAX</abbr> Contact Form</h1>
	<p>With just 2 files this can be easily integrated into any <b>HTML</b> or <b>PHP</b> page!</p>
	<div id="message"></div>
	<form method="post" action="contact-form/contact.php" name="contactform" id="contactform">
		<fieldset>
			<legend>Please fill in the following form to contact us</legend>
			<label for="name" accesskey="U"><span class="required">*</span> Your Name</label>
			<input name="name" type="text" id="name" size="30" value="" />
			<br />
			<label for="email" accesskey="E"><span class="required">*</span> Email</label>
			<input name="email" type="text" id="email" size="30" value="" />
			<br />
			<label for="phone" accesskey="P"><span class="required">*</span> Phone</label>
			<input name="phone" type="text" id="phone" size="30" value="" />
			<br />
			<label for="subject" accesskey="S">Subject</label>
			<select name="subject" id="subject">
				<option value="Support">Support</option>
				<option value="a Sale">Sales</option>
				<option value="a Bug fix">Report a bug</option>
			</select>
			<br />
			<label for="comments" accesskey="C"><span class="required">*</span> Your comments</label>
			<textarea name="comments" cols="40" rows="3" id="comments" style="width: 350px;"></textarea>
			<p><span class="required">*</span> Are you human?</p>
			<label for="verify" accesskey="V">&nbsp;&nbsp;&nbsp;3 + 1 =</label>
			<input name="verify" type="text" id="verify" size="4" value="" style="width: 30px;" /><br /><br />
			<input type="submit" class="submit" id="submit" value="Submit" />
		</fieldset>
	</form>
</div> -->