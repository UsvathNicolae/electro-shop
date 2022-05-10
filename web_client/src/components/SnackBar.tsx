import * as React from "react"
import Button from "@mui/material/Button"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setClose } from "../redux/reducers/snackbarReducer"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const CustomSnackBar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [severity, setSeverity] = useState<AlertColor | undefined>("success")

  const snackbarState = useAppSelector((state) => state.snackBar)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setOpen(snackbarState.isOpen)
    if (snackbarState.success) {
      setSeverity("success")
    } else {
      setSeverity("error")
    }
  }, [snackbarState])

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
    dispatch(setClose())
  }

  return (
    <div>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {snackbarState.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default CustomSnackBar
