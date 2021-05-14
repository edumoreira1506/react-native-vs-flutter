import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Button extends StatelessWidget {
  final void Function() onTap;
  final String text;

  Button({this.onTap, this.text});

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: ButtonStyle(
          backgroundColor:
              MaterialStateProperty.all<Color>(Color.fromRGBO(26, 115, 232, 1)),
          padding:
              MaterialStateProperty.all<EdgeInsetsGeometry>(EdgeInsets.all(0))),
      child: Container(
        child: Text(
          this.text,
          style: TextStyle(
            color: Colors.white,
            fontSize: 10,
          ),
        ),
      ),
      onPressed: this.onTap,
    );
  }
}
