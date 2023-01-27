import React from 'react';
import { useState } from 'react';
import { C4data } from "./Cdata";
import { RxDotFilled } from 'react-icons/rx';

const Demo1 = () => {
  
  return (
    <div>
      <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                    {C4data.map(function (doc, idx) {
                                return (
                                    <>
                        <div class="col">
                        {doc.qn ? <div><RxDotFilled/> {doc.qn}</div> : ""}
                        </div>
                        <div class="col C1">
                        <div>{doc.name1 ? <label for="chkPassport"><input type="checkbox" id="chkPassport"/> {doc.name1}</label> : ""} {doc.name2 ? <label for="chkPassport" className="No"><input type="checkbox" id="chkPassport"/> {doc.name2}</label> : ""}</div>
                        </div>
                        </>
                                )
                            })}
                    </div>
    </div>
  );
};

export default Demo1;