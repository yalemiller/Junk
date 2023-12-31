import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

function ApplianceDropdown({
  selectedProfileDefaultAppliances,
  setSelectedProfileDefaultAppliances,
  kitchenAppliances,
}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCheckboxChange = (appliance) => {
    const updatedAppliances = selectedProfileDefaultAppliances.includes(appliance)
      ? selectedProfileDefaultAppliances.filter((item) => item !== appliance)
      : [...selectedProfileDefaultAppliances, appliance];

    setSelectedProfileDefaultAppliances(updatedAppliances);
  };

  const dropdownStyle = {
    paddingRight: '40px',
  };

  const labelStyle = {
  };

  return (
    <Dropdown show={isDropdownOpen} onToggle={handleDropdownToggle} style={dropdownStyle}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic" data-bs-theme="light" style={labelStyle}>
        Appliances
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Form>
          {kitchenAppliances.map((appliance, index) => (
            <div key={`appliance-${index}`} className="mb-3">
              <Form.Check
                type="checkbox"
                id={`appliance-${index}`}
                label={appliance}
                checked={selectedProfileDefaultAppliances.includes(appliance)}
                onChange={() => handleCheckboxChange(appliance)}
              />
            </div>
          ))}
        </Form>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ApplianceDropdown;
