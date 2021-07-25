import React from 'react'
import './Reminder.css'


function Reminder() {
    return (
        <div>
            <div class="container bootstrap snippets bootdeys">
                <div class="row">
                    <div class="col-md-4 col-sm-6 content-card">
                        <div class="card-big-shadow">
                            <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                                <div class="content">
                                    <h6 class="category">Best cards</h6>
                                    <h4 class="title"><a href="#">Blue Card</a></h4>
                                    <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-6 content-card">
                        <div class="card-big-shadow">
                            <div class="card card-just-text" data-background="color" data-color="green" data-radius="none">
                                <div class="content">
                                    <h6 class="category">Best cards</h6>
                                    <h4 class="title"><a href="#">Green Card</a></h4>
                                    <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-6 content-card">
                        <div class="card-big-shadow">
                            <div class="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                                <div class="content">
                                    <h6 class="category">Best cards</h6>
                                    <h4 class="title"><a href="#">Yellow Card</a></h4>
                                    <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Reminder
