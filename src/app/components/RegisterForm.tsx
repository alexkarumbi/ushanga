import React from "react";

type InputProps = {
  label: string;
  placeholder: string;
  type: any;
};

type SelectProps = {
  label: string;
  placeholder: string;
  options: any;
};

const Input: React.FC<InputProps> = ({ label, type }) => (
  <div className=" flex flex-start">
    <label>{label}</label>
    <input
      className="rounded border-transparent border-2  h-full w-full py-1 px-2  "
      type={type}
      name={label.toUpperCase()}
    />
  </div>
);

const Select: React.FC<SelectProps> = ({ label, options }) => (
  <div>
    <label>{label}</label>
    <select
      className="rounded border-black border-2 ml-4 mb-3"
      name={label.toUpperCase()}
    >
      {options.map((option, index) => (
        <option key={index} value={option.toLowerCase()}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const RegisterForm = () => {
  return (
    <div>
      <p className="text-2xl flex justify-center font-bold mb-2 ">
        USHANGA KENYA BEADMASTER PROFILE
      </p>
      <form action="" className="mb-10  ml-20 mr-24">
        <div className="bg-rose-400 flex justify-center mb-3 h-10 pt-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white text-xl p-4 ">
          <p className="">BEADMASTER PROFILE</p>
        </div>
        <table className="w-full table-auto">
          <tbody>
            <tr>
              <td className="border px-4 py-2">NAME / JINA</td>
              <td className="border px-4 py-2">
                <Input type="text" label={""} placeholder={""}></Input>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">AGE / UMRI</td>
              <td className="border px-4 py-2">
                <Input type="number" label={""} placeholder={""}></Input>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">GENDER / JINSIA</td>
              <td className="border px-4 py-2">
                <Select  label={""} placeholder={""} options={["Married","Single"]}></Select>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                ID NUMBER/ NAMBARI YA KITAMBULISHO
              </td>
              <td className="border px-4 py-2">
                <Input type="number" label={""} placeholder={""}></Input>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">COUNTY / KAUNTI</td>
              <td className="border px-4 py-2">
                <Input type="text" label={""} placeholder={""}></Input>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">SUB-COUNTY / USUB-KAUNTI</td>
              <td className="border px-4 py-2">
                <Input type="text" label={""} placeholder={""}></Input>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">GENDER / JINSIA</td>
              <td className="border px-4 py-2">
                <Input type="text" label={""} placeholder={""}></Input>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">GENDER / JINSIA</td>
              <td className="border px-4 py-2">
                <Input type="text" label={""} placeholder={""}></Input>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">STRENGTHS / NGUVU</td>
              <td className="border px-4 py-2 flex flex-col ">
                <div className="mb-3 ml-2 mr-8">
                  <Input
                    type="checkbox"
                    label={"TRADITIONAL JEWELLERY/SHANGA ZAKITAMADUNI"}
                    placeholder={""}
                  />
                </div>
                <div className="mb-3 ml-2 ">
                  <Input
                    type="checkbox"
                    label={"MODERN JEWELLERY/ SHANGA ZA KISASA"}
                    placeholder={""}
                  />
                </div>
                <div className="mb-3 ml-2 mr-10">
                  <Input
                    type="checkbox"
                    label={"LEATHER BEADWORK/KUSHONA SHANGA KWA NGOZI"}
                    placeholder={""}
                  />
                </div>
                <div className="ml-2 mr-16">
                  <Input
                    type="checkbox"
                    label={"SPECIALITY ITEM BEADWORK/UJUZI WA SHANGA ZENGINEZO"}
                    placeholder={""}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">SIGNATURE/ SAINI</td>
              <td className="border px-4 py-2">
                <Input type="text" label={""} placeholder={""}></Input>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default RegisterForm;
