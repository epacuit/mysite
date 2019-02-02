import React from 'react';
import './style.scss';
import {
	FaEnvelope,
	FaUniversity,
	FaBook,
	
  } from 'react-icons/fa'
  
const Footer = () => (
	<footer className="footer center has-background-light" style={{height:"250px"}}>
		<div className="content has-text-centered">
			<span style={{display:"block",width:"300px"}}>
				<p className="is-size-6" style={{textAlign:"left"}}>
					<span className="icon is-small" style={{verticalAlign:"middle", marginRight:"5px", marginBottom:"3px"}}>{' '}
                  		<FaUniversity />{' '} 
					</span> 
					<a href="http://philosophy.umd.edu" 
					   target="_blank" rel="noopener noreferrer" 
					   style={{textDecoration:"none",borderBottom:"none"}}>
						  Department of Philosophy</a>, 
						  1103A Skinner Building,&nbsp;
						  <a href="http://umd.edu" 
							 target="_blank" rel="noopener noreferrer" 
							 style={{textDecoration:"none",borderBottom:"none"}}> 
						    University of Maryland</a>, 
						   College Park, MD, 20724<br/>
						
					<span className="icon is-small" 
					      style={{verticalAlign:"middle", marginRight:"5px", marginBottom:"2px"}}>
                        {' '}<FaEnvelope />{' '}
                    </span>
					<a href="mailto:epacuit@umd.edu" 
					   style={{textDecoration:"none",borderBottom:"none",paddingBottom:"5px"}}>
					epacuit@umd.edu</a>
      				</p>
			</span>
		</div>
	</footer>		
);

export default Footer;
