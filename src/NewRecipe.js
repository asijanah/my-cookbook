import React from 'react';

function NewRecipe() {
    return (
        <div className="container mt-3">
            <form className="form-wrapper">
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="formGroupExampleInput">Recipe name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput"
                            placeholder="Recipe name" />
                    </div>
                    <div className="form-group col-md-3">
                        <label>who can watch</label>
                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                    value="option1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Everyone</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                    value="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Only Me</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <div className="form-group">
                            <label>Main Image</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-9">
                        <label htmlFor="source">Source</label>
                        <input type="text" className="form-control" id="source" placeholder="Recipe Source" />
                        <label htmlFor="source">Link</label>
                        <input type="text" className="form-control" id="Link" placeholder="Link to recipe if any" />
                    </div>
                    <div className="form-group col-md-3">
                        <img className="img-fluid" alt="" srcSet="" />
                    </div>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    General Description
                            </button>
                            </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                            data-parent="#accordionExample">
                            <div className="card-body">
                                <label>Background description of the recipe. Will be displayed below the title</label>
                                <textarea className="form-control" id="description" rows="3"></textarea>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label>Suitable for diet type:</label>
                                        <div className="form-check">
                                            <div className="form-row">
                                                <div className="col-lg-3 col-md-4 col-6">
                                                    <input className="form-check-input" type="checkbox" value="" id="diet0" />
                                                    <label className="form-check-label" htmlFor="diet0">vegan</label>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-6">
                                                    <input className="form-check-input" type="checkbox" value="" id="diet0" />
                                                    <label className="form-check-label" htmlFor="diet0">Gluten free</label>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-6">
                                                    <input className="form-check-input" type="checkbox" value="" id="diet0" />
                                                    <label className="form-check-label" htmlFor="diet0">kosher</label>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-lg-3 col-md-4 col-6">
                                                    <input className="form-check-input" type="checkbox" value="" id="diet0" />
                                                    <label className="form-check-label" htmlFor="diet0">vegetarian</label>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-6">
                                                    <input className="form-check-input" type="checkbox" value="" id="diet0" />
                                                    <label className="form-check-label" htmlFor="diet0">surf</label>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-6">
                                                    <input className="form-check-input" type="checkbox" value="" id="diet0" />
                                                    <label className="form-check-label" htmlFor="diet0">surf</label>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-lg-3 col-md-4 col-6">
                                                    <input className="form-check-input" type="checkbox" value="" id="diet0" />
                                                    <label className="form-check-label" htmlFor="diet0">surf</label>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-6">
                                                    <input className="form-check-input" type="checkbox" value="" id="diet0" />
                                                    <label className="form-check-label" htmlFor="diet0">surf</label>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-6">
                                                    <input className="form-check-input" type="checkbox" value="" id="diet0" />
                                                    <label className="form-check-label" htmlFor="diet0">surf</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Type</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed" type="button"
                                    data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    The ingredients
                            </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                <div className="row">
                                    <hr />
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-1 col-6">
                                        <label htmlFor="Quantity">Quantity</label>
                                        <input type="input" className="form-control" id="qty" />
                                    </div>
                                    <div className="form-group col-md-2 col-6">
                                        <label htmlFor="Measure">Measure units </label>
                                        <select className="custom-select mr-sm-2" id="select">
                                            {/* <option selected>Choose...</option> */}
                                            <option value="1">gram</option>
                                            <option value="2">Ml</option>
                                            <option value="3">spoon</option>
                                            <option value="4">spoons</option>
                                            <option value="5">Kurt</option>
                                            <option value="6">Kg</option>

                                        </select>
                                    </div>
                                    <div className="form-group-mb-0 col-md-4 col-sm-4">
                                        <label htmlFor="Color">Color</label>
                                        <select className="custom-select mr-sm-2" id="select">
                                            <option selected>Choose one...</option>
                                            <option value="1">Baking powder</option>
                                            <option value="2">Eggs</option>
                                            <option value="3">Onion</option>
                                            <option value="4">Water</option>
                                            <option value="5">Salt</option>
                                            <option value="6">Suger</option>
                                            <option value="7">Flour</option>
                                            <option value="8">Oil</option>
                                            <option value="9">Garlick</option>
                                            <option value="10">Semolina</option>
                                            <option value="11">Sour cream</option>
                                            <option value="12">pepper</option>
                                        </select>
                                    </div>
                                    <div className="form-group-mb-0 col-md-3 col-sm-4">
                                        <label htmlFor="Aditional-text">Aditional Text</label>
                                        <input type="text" className="form-control" id="txt" />
                                    </div>
                                    <div className="form-group-mb-0 col-md-1 col-sm-4">
                                        <label>&nbsp;</label>
                                        <br />
                                        <input type="button" className="btn btn-primary mx-1" value="save" />
                                    </div>
                                    <div className="form-group-mb-0 col-md-1 col-sm-4">
                                        <label>&nbsp;</label>
                                        <br />
                                        <input type="button" className="btn btn-secondary mx-1" value="clear" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-1">&nbsp;</div>
                                    <div className="col-md-9">
                                        <small className="form-text text-muted">Example htmlFor things you can write here!</small>
                                    </div>
                                    <div className="col-md-2">&nbsp;</div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" type="button"
                                        data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        Preparation steps
                                </button>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                data-parent="#accordionExample">
                                <div className="card-body">
                                    <div className="form-row">
                                        <div className="form-group col-lg-2 col-md-1 col-sm-1">
                                            <label htmlFor="#">#</label>
                                            <input type="input" id="#" className="form-control" />
                                        </div>
                                        <div className="form-group-mb-0 col-lg-8 col-md-9 col-sm-11">
                                            <label htmlFor="Instraction">Instraction</label>
                                            <input type="input" id="Instraction" className="form-control" placeholder="What will be done at this point"  />
                                        </div>
                                        <div className="form-group-mb-0 col-lg-2 col-md-2">
                                            <label>&nbsp;</label>
                                            <br />
                                            <input className="btn btn-primary" type="button" value="save" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-lg-9">
                                            <small className="form-text text-muted">Tip: There is no need to maintain continuity of numbering. For example: Instructions 0,6,9 will be displayed as 1,2,3</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-row m-2">
                    <div class="col-align-left"></div>
                    <div class="col-align-left">
                        <input class="btn btn-primary" type="button" value="Save All" />
                    </div>
                </div>
            </form>
        </div>)
}
export default NewRecipe