import React from "react";
import './MemberShipPage.css';

function MemberShip() {
    return (
        <div>
            <div className="membership_container">
                <h2>Add the MemberShips</h2>
                <div className="membership_content">
                    <form className="membership_form">

                        <label for="fname">Name</label>
                        <input
                            type="text"
                            className="membership_input"
                            placeholder="Enter the name..."
                        />

                        <label for="Description">Price</label>
                        <input
                            type="text"
                            className="membership_input"
                            placeholder="Enter the price..."
                        />

                        <label for="message">Image</label>
                        <input type="file" className="membership_input" style={{ backgroundColor: "white" }} />

                        <label for="Description">Benefits</label>
                        <input
                            type="text"
                            className="membership_input"
                            placeholder="Add the benefits..."
                        />
                        <div className="Membership_desc">
                            <div className="Membership_title" style={{ gridColumn: "1 / 3" }}>
                                <label for="Description">Title</label><br />
                                <input
                                    type="text"
                                    className="membership_input"
                                    placeholder="Add the title..."
                                />
                            </div>
                            <div className="Membership_description" style={{ gridColumn: "3 / 5" }}>
                                <label for="Description">Description</label><br />
                                <input
                                    type="text"
                                    className="membership_input"
                                    placeholder="Add the description..."
                                />
                            </div>

                            <div className="Add_desc">
                                <button className="MemberShipAdd_Btn">Add</button>
                            </div>
                        </div>

                        <label for="Description">Included</label>
                        <input
                            type="text"
                            className="membership_input"
                            placeholder="Add the includedInfo..."
                        />

                        <label for="Description">Tag</label>
                        <input
                            type="text"
                            className="membership_input"
                            placeholder="Enter the tag..."
                        />
                        <button className="MemberShipSubmit_Btn">Submit MemberShip</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default MemberShip;

