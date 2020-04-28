import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import MaskedInput from "react-text-mask";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));
const Signup = (props) => {
	const classes = useStyles();
	const [values, setValues] = useState({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
	});

	function NumberFormatCustom(props) {
		const { inputRef, onChange, ...other } = props;
	}

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Container>
			<form className={classes.root} noValidate autoComplete="off">
				<Row>
					<Col xs="12" sm="12">
						<TextField
							error={false}
							id="filled-error-helper-text"
							label="Email"
							variant="outlined"
							helperText=""
							size="small"
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<TextField label="CNIC" variant="outlined" size="small" />
					</Col>
				</Row>
				<Row>
					<Col>
						<TextField label="Mobile No." variant="outlined" size="small" />
					</Col>
				</Row>
				<Row>
					<Col>
						<FormControl
							className={clsx(classes.margin, classes.textField)}
							variant="outlined"
							size="small"
						>
							<InputLabel htmlFor="outlined-adornment-password">
								Password
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? "text" : "password"}
								value={values.password}
								onChange={handleChange("password")}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								}
								labelWidth={70}
							/>
						</FormControl>
					</Col>
				</Row>
				<Row>
					<Col>
						<FormControl
							className={clsx(classes.margin, classes.textField)}
							variant="outlined"
							size="small"
						>
							<InputLabel htmlFor="outlined-adornment-password">
								Confirm Password
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? "text" : "password"}
								value={values.password}
								onChange={handleChange("password")}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								}
								labelWidth={140}
							/>
						</FormControl>
					</Col>
				</Row>
			</form>
		</Container>
	);
};

export default Signup;
