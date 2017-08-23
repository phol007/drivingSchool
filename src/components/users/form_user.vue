<template>
	<div class="form-user">
		<div class="content-view" style="text-align:left;">
			<h1>{{ msg }}</h1>
			<div class="ui ordered steps">
			  <div class="step" id="stepone">
			    <div class="content">
			      <div class="title">กรอกข้อมูลส่วนตัว</div>
			      <div class="description">กรุณากรอกข้อมูลส่วนตัว และตรวจสอบข้อมูลให้ครบถ้วน</div>
			    </div>
			  </div>
			  <div class="step" id="steptwo">
			    <div class="content">
			      <div class="title">กรอกข้อมูลการเรียน</div>
			      <div class="description">กรุณาตรวจสอบข้อมูลให้ครบถ้วนก่อน กด "ยืนยัน"</div>
			    </div>
			  </div>
			</div>
			<hr />

			<!-- step 1 -->			
				<div class="stepone" v-show="step==0" style="text-align:center;">
				<form class="ui form" enctype="multipart/form-data" method="post" name="proFlie" style="text-align:left;">
			          <div class="ui equal width form">
			            <div class="fields">
			              <div class="required field">
			                <div class="phone-viewport">
			                  <md-list>
			                    <md-list-item>
			                      <md-avatar class="md-large">      
			                      <img class="avatar" v-if="avatarUrl" :src="avatarUrl" v-show="true" style="display: none;">
			                      <input type="hidden" name="img_ProFile" id="img_ProFile">
			                      </md-avatar>
			                      <span>ID 002</span>                      
			                    </md-list-item>
			                    <button class="ui secondary basic button" @click="toggleShow" type="button" style="width:50%;">
			                        <i class="write icon"></i>
			                        Edit Picture Profile
			                      </button>            
			                      <my-upload url="http://localhost/resturant_project/api/upload"
			                        @crop-success="cropSuccess"
			                        @crop-upload-success="cropUploadSuccess"
			                        @crop-upload-fail="cropUploadFail"
			                        field="avatar"
			                        ki="0"
			                        lang-type="en"
			                        v-model="show"
			                        :headers="headers"
			                        :params="otherParams"></my-upload>
			                  </md-list>
			                </div>
			              </div>
			              <div class="field" style="50%">   
			              	<div class="required field"> 
				                <label>Username</label>
				                <input type="text" name="Username" placeholder="Username">                                
			                </div>
			                <p></p>
			                <div class="required field"> 
				                <label>Password</label>
				                <input type="Password" name="Pwd" placeholder="Password">
			                </div>
			              </div>
			            </div>
			          </div>        
			          <div class="ui equal width form">
			            <div class="fields">
			              <div class="required field">
			                <label>ID Card</label>
			                <input type="number" placeholder="ID card" name="Idcard">
			              </div>
			              <div class="required field">
			                <label>Birth Day</label>
			                <input type="date" name="Birthday">
			              </div>
			            </div>
			          </div>
			          <div class="ui equal width form">
			            <div class="required fields">
			              <div class="field">
			                <label>First name</label>
			                <input type="text" placeholder="First name" name="Fristname">
			              </div>
			              <div class="required field">
			                <label>Last name</label>
			                <input type="text" placeholder="Last name" name="Lastname">
			              </div>
			            </div>
			          </div>
			          <div class="required field">
			            <label>Address</label>
			            <textarea rows="2" cols="2" name="Address"></textarea>
			          </div>
			          <div class="ui equal width form">
			            <div class="fields">
			              <div class="required field">
			                <label>Telephone</label>
			                <input type="tel" placeholder="Telephone..." maxlength="10" name="Telephone">
			              </div>
			              <div class="field">
			                <label>Image ID Card</label>
			                <input type="file" name="file" id="file">
			              </div>
			            </div>
			          </div>			         		          
			        </form>
			        <button class="ui negative  button" type="button" @click="goTo('/')">
					  ยกเลิก
					</button>
			        <button class="ui positive  button" type="button" @click="nextStep">
					  ถัดไป
					</button>
				</div>
			<!-- close step 1 -->

			<!-- step 2 -->
				<div class="steptwo" v-show="step==1" style="text-align:center;">
				<form class="ui form" style="text-align:left; margin: 2%;"> 
					<div class="three fields">
						<div class="required field">
				            <div class="grouped fields">
							    <label for="course" style="font-size:18px;">คอร์สที่เรียน</label>
							    <div class="field" v-for="course in course_lists">
							      <div class="ui radio">
							        <input type="radio" name="course" checked="" tabindex="index" class="hidden" :disabled="completeStep == 1">
							        <label>{{ course.course_name }} ราคา {{ course.price }} บาท</label>
							      </div>
							    </div>
							 </div>
				        </div>
				        <div class="field">
				        	<div class="field">
				        		<label style="font-size:18px;">วันที่เริ่มเรียน</label>
     							<input type="date" :disabled="completeStep == 1">
				        	</div>
							<p></p>
					        <div class="field">
								<label>สถานที่เรียน</label>
	     						<select :disabled="completeStep == 1">
	     							<option>สนามเส้นมีโชค - สันทราย อ.สันทราย จ.เชียงใหม่</option>
	     							<option>สนามเส้นแม่ริม - แม่แตง อ.แม่ริม จ.เชียงใหม่</option>
	     							<option>สนามเส้นหางดง - คันคลอง อ.หางดง จ.เชียงใหม่</option>
	     						</select>
					        </div>
					        <div class="field" style="padding-top:2%;">
								<div style="width:200px; height:100px; border:1px solid black; padding: 10% 0; text-align:center; margin:auto;">
									Location Picture
								</div>
					        </div>
				        </div>
				        <div class="field">
					        <div class="field">
								<label>ประเภทรถ</label>
		     					<select :disabled="completeStep == 1">
		     						<option>รถเก๋ง</option>
		     						<option>รถกะบะ 2 ประตู</option>
		     						<option>รถกะบะ 4 ประตู</option>
		     						<option>รถส่วนตัว</option>
		     					</select>
						    </div>
						    <div class="field" style="padding-top:5%;">
								<div style="width:300px; height:150px; border:1px solid black; text-align:center; margin:auto;">
									<img src="../../assets/car1.png" style="width:100%;">
								</div>
						    </div>
						</div>
				    </div>
			    </form>
			    	<button class="ui negative  button" type="button" @click="backStep" v-show="completeStep == 0">
					  ย้อนกลับ
					</button>
			        <button class="ui positive  button" type="button" @click="insertData" v-show="completeStep == 0">
					  ยืนยัน
					</button>
					<button class="ui negative  button" type="button" @click="goTo('/')" v-show="completeStep == 1">
					  พิมพ์ใบสมัครทีหลัง
					</button>
					<button class="ui positive  button" type="button" @click="print" v-show="completeStep == 1">
					  พิมพ์ใบสมัครเดี๋ยวนี้
					</button>
				</div>
			<!-- close step 2 -->

		</div>
	</div>
</template>

<script src="../../js/users/form_user.js"></script>